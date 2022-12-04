import { Table, Button, message, Space, Popconfirm, Image } from "antd";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/product";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../services/product";

const { Column } = Table;

const ListProducts = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const [removeData] = useRemoveProductMutation();
  console.log(products);
  const getAll = () => {
    return products.map((item: IProduct) => ({
      key: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      sale: item.sale,
      rate: item.rating,
      amount: item.amount,
      desc: item.description,
    }));
  };
  const removeItem = (id: any) => {
    removeData(id);
    message.info("Successfully");
  };
  return (
    <div>
      <Table dataSource={getAll()}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Image"
          key="image"
          render={(product) => {
            console.log("Product: ", product);
            return (
              <>
                <Image width={200} src={`${product.image}`} />
              </>
            );
          }}
        ></Column>

        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Desc" dataIndex="desc" key="desc" />
        <Column
          title="Action"
          key="action"
          render={(product) => {
            console.log(product);
            return (
              <>
                <Button
                  href={`/admin/products/${product.key}/edit`}
                  type="link"
                >
                  Update
                </Button>
                <Popconfirm
                  placement="topRight"
                  title="You want to delete ?"
                  onConfirm={() => removeItem(product.key)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </>
            );
          }}
        ></Column>
      </Table>
    </div>
  );
};

export default ListProducts;
