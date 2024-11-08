import Link from "next/link";

// components/ProductCard.tsx
interface ProductType {
  content: string;
  title: string;
  image: string;
  brand: string;
  price: number;
  salePrice?: number;
  url: string;
}

const ProductCard = ({ product }: { product: ProductType }) => {

  
  return (
    <div className="bg-white rounded-lg overflow-hidden mr-3 w-full border border-[#e2e8f0] hover:shadow-card-hover hover:border-[#145b97] transition duration-300 ease-in-out">
    <div className="relative">
      <div className="w-auto px-0">
        <div className="mx-auto">
          <a
            href={`${product.url}`}
            // onClick={() => sendEvent("Img pdp")}
          >
            <img
              src={product.image + "?iresize=width:235,height:190"}
              alt={product.title}
              className={`object-contain min-h-[190px] max-h-[190px] w-full relative top-[-5px]`}
              width={235}
              height={190}
            />
          </a>
        </div>
      </div>
      {/* <div className="flex px-3 mt-1 h-[25px]">
        {badges.map((badge: any, index: number) => {
          return (
            <div
              key={index}
              className={`font-['Helvetica, sans-serif'] antialiased px-1 py-1 mr-1 text-[12px] rounded-lg ${badge.group == "1" ? "bg-[#e4f7ff] text-[#0076a9]" : "bg-[#EBEBEB] text-black"} `}
            >
              {badge.label}
            </div>
          );
        })}
      </div> */}
    </div>
    <div className="pt-1 pb-3 px-3">
      <h3
        className={`text-[14px] text-[#1b1a16] font-['Helvetica, sans-serif'] antialiased font-normal break-word min-h-[40px]`}
        title={product.title}
      >
        <a
          href={`${product.url}`}
          // onClick={() => sendEvent("Img pdp")}
        >
          {product.title.length > 50 ? `${product.title.slice(0, 50)}...` : product.title}
        </a>
      </h3>

      <p className="mt-1">
        <span
          className={`text-[#d3273e] text-[20px] font-bold`}
          hidden={product.salePrice === 0}
        >
          ${Number(product.salePrice).toLocaleString("en-US")}
        </span>
        <span
          className={`${product.salePrice === 0 ? `text-black font-bold text-[20px]` : `text-[14px] text-[#717171] ml-2 line-through font-light align-top relative top-[4px]`}`}
        >
          ${Number(product.price).toLocaleString("en-US")}
        </span>
      </p>

      {/* <h4 className="text-[#717171] text-[14px] antialiased font-normal mt-1">
        Desde ${paymentPlan.value} quincenal
      </h4> */}

      {/* <div className="flex mt-2">
        {deliveryStatus.shipment === true ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2">
                  <Shipment />
                </div>
              </TooltipTrigger>
              <TooltipContent className="ml-28">
                <p>Envío a tu domicilio</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : null}
        {deliveryStatus.store === true ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2">
                  <Store />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Entrega en tienda</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : null}
        {deliveryStatus.marketPlace === true ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2">
                  <Marketplace />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Vendido por {mpSellerName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : null}
      </div> */}

      <Link
        href={`${product.url}`}
        // onClick={() => sendEvent("Btn modal")}
      >
        <button
          className={`w-full font-bold sm:text-[16px] xs:text-[11px] flex justify-center items-center mt-3 bg-white text-[#1a6db4] border-[1px] border-[#1a6db4] px-4 py-3 rounded-[30px] hover:bg-[#f1f4fa] transition duration-300 ease-in-out`}
        >
          Ir al Producto
        </button>
      </Link>
    </div>
  </div>
  )
}

export default ProductCard;