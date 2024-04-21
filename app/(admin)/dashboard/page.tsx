"use client";
import { ProductT } from "@/app/library/definitions";
import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function Dashboard() {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductT | null>(null);
  const ImagePlaceHolder="https://imgs.search.brave.com/Bnih5OaEx311pSibhBdL7BVSCg0rs96EYZHLu3IaKr0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmVsZW1l/bnRvci5jb20vZG9j/cy9hc3NldHMvaW1n/L2VsZW1lbnRvci1w/bGFjZWhvbGRlci1p/bWFnZS5wbmc"
  const Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTQ0MjA5LCJpYXQiOjE3MTIzODQyMDksImp0aSI6IjNiOTE1NTg2NjJjYTQwMzhiNmI1MzNhYzI1MjZiMjZhIiwidXNlcl9pZCI6Njd9.UEBo0vwYqsvHts7kCKBy1s4Hzxq50RFQ1JqlR5J0SN0"
  const ENDPOINT = "https://store.istad.co/api/products/";


  useEffect(() => {
    setLoading(true);
    fetch("https://store.istad.co/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleViewProduct = (products: ProductT) => {
    setProductDetail(products);
    setOpenModal(true);
  };
  // const handleDelete=(product:ProductT)=>{
  //   const id=product.id
  //   setLoading(true)
  //   fetch(`${ENDPOINT}/api/products/${id}/`,{
  //     method:'DELETE',
  //     headers:{
  //       'Content-Type':'application/json', 
  //        'Authorization':`Bearer ${Token}`
  //     }})
  // }
  // const handleEdit=(product:ProductT)=>{
  //   const id=product.id
  //   setLoading(true)
  //   fetch(`${ENDPOINT}/api/products/${id}/`,{
  //     method:'PUT',
  //     headers:{
  //       'Content-Type':'application/json', 
  //        'Authorization':`Bearer ${Token}`,
  // }}).then(res=>res.json())
  //    .then((data)=>setProducts(data))
  //    .catch(err=>console.log(err))
  // }
  
  const columns: TableColumn<ProductT>[] = [
    {
      name: "Name Product",
      selector: (row) => row.name,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img className="w-11" src={row.image} alt={row.image} />
      ),
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div>
          <button
            onClick={() => {
              handleViewProduct(row);
            }}
            className="text-white mx-2  bg-purple-700 p-3 rounded-2xl"
          >
            view
          </button>
          <button  className="text-white mx-2  bg-yellow-500 p-3 rounded-2xl">
            Edit
          </button>
          <button className="text-white mx-2  bg-red-700 p-3 rounded-2xl">
            Delete
          </button>
        </div>
      ),
    },
  ];

 
  return (
    <main className="h-screen">
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        pagination
        customStyles={customStyles}
        striped
        highlightOnHover
      />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={productDetail?.image||ImagePlaceHolder} width={500} height={500} alt={productDetail?.name||"Untitle"} className="w-full h-96 object-fit" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetail?.description}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {productDetail?.name}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable progressPending={loading}	columns={columns} data={products} pagination persistTableHead/>
    </main>
   
  );
}
const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "1.2rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
