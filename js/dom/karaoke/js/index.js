var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

// Tính chiều rộng của progress-bar
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
var isDragging = false;

// Tạo timer để hiển thị thời gian khi hover
var timer = document.createElement("div");

var css = {
  position: "absolute",
  padding: "2px 5px",
  background: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  borderRadius: "3px",
  fontSize: "12px",
  display: "none",
  translate: "0 -150%",
};
Object.assign(timer.style, css);
progressBar.appendChild(timer);

progressBar.addEventListener("mousedown", function (e) {
  isDragging = true;
  // Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;

  // Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  // Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;

  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDragging = true;
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX; // Gán ví trí của button màu tím so với body
});

document.addEventListener("mouseup", function () {
  if (isDragging) {
    isDragging = false;
    var rate = (offsetProgressBar / progressBarWidth) * 100;
    // Cập nhật thời gian phát của audio khi nhả chuột
    audio.currentTime = (rate / 100) * duration;
    document.removeEventListener("mousemove", handleDrag);
    lastOffsetProgressBar = offsetProgressBar;
  }
});

var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
};

progressBar.addEventListener("mousemove", function (e) {
  var hoverX = e.offsetX;
  var rate = (hoverX / progressBarWidth) * 100;
  var hoverTime = (rate / 100) * duration;
  timer.style.display = "block";
  timer.innerText = getTimeFormat(hoverTime);
  timer.style.left = `${hoverX}px`;
});

progressBar.addEventListener("mouseleave", function () {
  timer.style.display = "none";
});

var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playBtn = player.querySelector(".play-btn i");
var playTimer = player.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;
var duration = 0;
var setDuration = function () {
  duration = audio.duration;
  durationEl.innerText = getTimeFormat(duration);
};

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(duration);
  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  audio.addEventListener("play", function () {
    playBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
  });
  audio.addEventListener("ended", function () {
    // Đặt lại mọi thứ về 0 khi nhạc kết thúc
    audio.currentTime = 0;
    progress.style.width = "0%";
    currentTimeEl.innerText = "00:00";
    playBtn.classList.replace("fa-pause", "fa-play");
  });
});

//requestAnimationFrame
//cancelAnimationFrame

var requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
var currentIndex;
var karaokeInner = document.querySelector(".karaoke-inner");
function handleKaraoke() {
  var currentTime = audio.currentTime * 1000;
  handleFillColor(currentTime);
  var index = lyrics.findIndex(function (item) {
    var words = item.words;
    var firstWord = words[0];
    var lastWord = words[words.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });
  if (index !== -1 && index !== currentIndex) {
    if (index === 0) {
      var output = `
      <p>${getSentence(index)}</p>
      <p>${getSentence(index + 1)}</p>
      `;
      karaokeInner.innerHTML = output;
    } else {
      var nextSentenceStr =
        index + 1 >= lyrics.length ? " " : getSentence(index + 1);
      setTimeout(function () {
        if (index % 2 !== 0) {
          nextSentence(karaokeInner.children[0], nextSentenceStr);
        } else {
          nextSentence(karaokeInner.children[1], nextSentenceStr);
        }
      }, 500);
    }
    currentIndex = index;
  }
  requestId = requestAnimationFrame(handleKaraoke);
}

function handleFillColor(currentTime) {
  var wordList = karaokeInner.querySelectorAll(".word");
  wordList.forEach(function (wordEl) {
    var startTime = wordEl.dataset.startTime;
    var endTime = wordEl.dataset.endTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      var percent = ((currentTime - startTime) / (endTime - startTime)) * 100;
      wordEl.children[0].style.width = `${percent}%`;
    }
    if (currentTime > endTime) {
      wordEl.children[0].style.width = `100%`;
    }
  });
}

function getSentence(index) {
  return lyrics[index].words
    .map(function (item) {
      return `<span class='word' data-start-time='${item.startTime}' data-end-time='${item.endTime}'>${item.data}<span>${item.data}</span></span>`;
    })
    .join(" ");
}

function nextSentence(element, sentence) {
  //element: Dòng muốn ẩn để hiển thị câu tiếp theo
  //nextSentence: Câu tiếp theo muốn hiển thị
  element.style.transition = "opacity 0.4s linear";
  element.style.opacity = 0;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 300);
}
