import CardComponent from "@/component/card/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";

type PropsParams = {
  params: {
    id: string;
  };
  searchParams: any;
};

const ENDPOINT = "https://store.istad.co/api/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};
export async function generateMetadata(
  { params, searchParams }: PropsParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`${ENDPOINT}${id}`).then((res) => res.json());


  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: product.image,
    },
  };
}

export default async function Detail(props: PropsParams) {
  let data = await getData(props.params.id);

  return (
    
    <div className=" h-screen grid place-content-center">
      <CardComponent
        name={data?.name || "NoName"}
        desc={data?.desc || "No Description"}
        image={
          data?.image ||
          "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
        }
      />
    </div>
  );
}
