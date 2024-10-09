"use client";
import FormDialog from "@/components/common/Dialog/FormDialog";
import Table from "@/components/common/Table";
import axiosInstance from "@/plugin/customAxios";
import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState({});
  const getCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  const columns = [
    {
      value: "id",
      label: "ID",
    },
    {
      value: "name",
      label: "Tên",
    },
    {
      value: "short_name",
      label: "Tên ngắn",
    },
    {
      value: "order_num",
      label: "Vị trí",
    },
    {
      value: "action",
      label: "",
    },
  ];

  const onUpdate = (row) => {
    setOpen(true);
    setRow(row);
  };
  const onDelete = (id) => {
    console.log(id);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <>
      <Table
        rows={categories}
        columns={columns}
        maxWidth={800}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      <FormDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        row={row}
        // handleUpdate={handleUpdate}
      />
    </>
  );
};

export default Category;
