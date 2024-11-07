"use client";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import BuscadorMobile from "./BuscadorMobile";
import MenuMobile from "components/MenuMobile";
import SegundoHeader from "components/SegundoHeader";
import { useEffect, useState } from "react";

export default function Header() {
	const [spotOferta, setSpotOferta] = useState<string>("");
	const [spotExclusivos, setSpotExclusivos] = useState<string>("");
	const [spotServicios, setSpotServicios] = useState<string>("");
	const [ofertaMobile, setOfertaMobile] = useState<string>("");
	const [exclusivosMobile, setExclusivosMobile] = useState<string>("");
	const [serviciosMobile, setServiciosMobile] = useState<string>("");
	const [cart, setCart] = useState<number>(0);
	const [name, setName] = useState<string>("");

	useEffect(() => {
		const getFirstNumber = (str: string) => {
			const num = str.match(/\d+/);
			return num ? num[0] : 0;
		};

		const myCookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("WC_CartTotal_"))
			?.split("=")[1];

		if (!myCookie) return console.log("No hay cookie de carrito");

		const cart = getFirstNumber(myCookie);
		setCart(Number(cart));
	}, []);

	useEffect(() => {
		const getFirstName = (str: string) => {
			const name = str.split("%20")[0];
			return name;
		};
		const cookieName = document.cookie
			.split("; ")
			.find((row) => row.startsWith("WC_LogonUserId_"))
			?.split("=")[1];

		if (!cookieName) {
			return;
		}

		setName(getFirstName(cookieName));
	}, []);

	useEffect(() => {
		const getOferta = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_Oferta"
			);
			const data = await res.json();
			setSpotOferta(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		const getSpotExclusivos = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_Exclusivos"
			);
			const data = await res.json();
			setSpotExclusivos(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		const getSpotServicios = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_Servicios"
			);
			const data = await res.json();
			setSpotServicios(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		const getOfertaMobile = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_OfertaMobile"
			);
			const data = await res.json();
			setOfertaMobile(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		const getExclusivosMobile = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_ExclusivosMobile"
			);
			const data = await res.json();
			setExclusivosMobile(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		const getServiciosMobile = async () => {
			const res = await fetch(
				"https://tsapp-prodlive.coppel.com/wcs/resources/store/10151/espot/Header_Spot_ServiciosMobile"
			);
			const data = await res.json();
			setServiciosMobile(
				data.MarketingSpotData[0].baseMarketingSpotActivityData[0]
					.marketingContentDescription[0].marketingText
			);
		};
		getOferta();
		getSpotExclusivos();
		getSpotServicios();
		getOfertaMobile();
		getExclusivosMobile();
		getServiciosMobile();
	}, []);

	const logOut = (prefix: string) => {
		const cookies = document.cookie.split(";");

		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i];
			if (cookie.startsWith(prefix)) {
				const eqPos = cookie.indexOf("=");
				const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
				document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
			}
		}
		window.location.href =
			"https://www.coppel.com/Logoff?myAcctMain=1&catalogId=10051&deleteCartCookie=true&langId=-5&storeId=10151&URL=https%3A%2F%2Fwww.coppel.com%2FLogonForm%3FmyAcctMain%3D1%26catalogId%3D10051%26langId%3D-5%26storeId%3D10151";
	};

	return (
		<header>
			<div className="bg-[#FFDD2F] flex justify-between">
				<MenuMobile
					ofertaMobile={ofertaMobile}
					exclusivosMobile={exclusivosMobile}
					serviciosMobile={serviciosMobile}
				/>
				<div className="flex">
					<div className="lg:px-8 lg:flex hidden flex-row items-center">
						{/* Nuevo Icono Compra Ahora */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20px"
							height="20px"
							viewBox="0 0 512 512"
							className="mr-1"
						>
							<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
						</svg>
						<div>
							<p className="text-nowrap text-sm font-semibold">Compra ahora</p>
							<Link href="tel:8002207735">
								<p className="text-sm underline">800 220 7735</p>
							</Link>
						</div>
					</div>
					<div className="px-7 py-4 bg-[#FFE86F] lg:block hidden">
						<div className="flex flex-col gap-0 text-nowrap">
							<div className="text-sm">Hola,</div>

							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center font-semibold">
									<div className="flex items-center font-semibold text-sm pt-1">
										{name ? name : "Inicia sesión"}{" "}
										{/* anterior icono en el iniciar sesion
                    <ChevronDown className="h-4" />
                    */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 ml-4"
											viewBox="0 0 49 48"
											fill="none"
											aria-hidden="true"
											focusable="false"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M4.93934 14.0394C5.52513 13.4536 6.47487 13.4536 7.06066 14.0394L24.5 31.4788L41.9393 14.0394C42.5251 13.4536 43.4749 13.4536 44.0607 14.0394C44.6464 14.6252 44.6464 15.575 44.0607 16.1608L26.2678 33.9536C25.2915 34.93 23.7085 34.93 22.7322 33.9536L4.93934 16.1608C4.35355 15.575 4.35355 14.6252 4.93934 14.0394Z"
												fill="#006fb9"
											></path>
										</svg>
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="mt-3 border-gray-200	">
									<div className="flex flex-col gap-2 px-2 py-2 w-60">
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/LogonForm?myAcctMain=1&amp;catalogId=10051&amp;langId=-5&amp;storeId=10151"
										>
											Iniciar sesión
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/UserRegistrationForm?myAcctMain=1&catalogId=10051&registerNew=Y&storeId=10151&langId="
										>
											Crear cuenta
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/StatementAccount?catalogId=10051&amp;storeId=10151&amp;langId=-5"
										>
											Estado de cuenta
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/solicita-tu-credito-coppel"
										>
											Solicitar Crédito Coppel
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="/abonar-en-linea"
										>
											Conoce cómo abonar
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="/solicitar-prestamo-personal"
										>
											Préstamo personal
										</Link>
										{name && (
											<label
												className="hover:bg-[#eee] p-2 rounded-lg"
												onClick={() => {
													logOut("WC_LogonUserId_");
												}}
											>
												Cerrar sesión
											</label>
										)}
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					<div className="lg:hidden sm:flex hidden py-2 ">
						<button className="bg-white flex items-center px-4 py-2 rounded-full h-8 gap-4">
							<Search className="w-4 h-4 text-[#016db6]" />
							<p className="text-[#016db6] text-sm">Buscar</p>
						</button>
					</div>

					<div className="lg:p-4 px-4 py-2 flex justify-center items-center bg-transparent lg:bg-[#016db6] lg:text-white text-[#016db6] relative">
						<Link href="https://www.coppel.com/RESTOrderCalculate?calculationUsageId=-1&catalogId=10051&doConfigurationValidation=Y&updatePrices=1&orderId=.&langId=-5&storeId=10151&errorViewName=AjaxOrderItemDisplayView&URL=https%3A%2F%2Fwww.coppel.com%2FAjaxOrderItemDisplayView">
							{/* quitamos el icono anterior de carrito
              <ShoppingCart className="w-8 h-8" />
              */}
							<svg
								width="41"
								height="41"
								viewBox="0 0 41 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								focusable="false"
								className="fill-[#016db6] lg:fill-white w-6 h-6 lg:w-10 lg:h-10"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.17106 4.33804C7.05192 4.33804 8.74389 5.53164 9.49767 7.35914L9.60878 7.65288L9.91503 8.54629L32.296 8.5465C32.4998 8.5465 32.703 8.5677 32.9025 8.60966L33.1989 8.68811C34.7924 9.19885 35.7296 10.9404 35.3778 12.6556L35.3187 12.9003L32.2216 24.026C31.8474 25.3701 30.7438 26.3176 29.4582 26.4308L29.1988 26.4422H14.9231C13.6912 26.4422 12.5808 25.6741 12.0657 24.4918L11.9646 24.2323L6.6503 8.828C6.44411 8.23031 5.94544 7.81346 5.36666 7.73606L5.17106 7.72306H3.6955C2.82436 7.72306 2.11816 6.96529 2.11816 6.03055C2.11816 5.16257 2.72708 4.4472 3.51155 4.34943L3.6955 4.33804H5.17106ZM11.0838 11.9313L14.9231 23.0572H29.1988L32.296 11.9315L11.0838 11.9313ZM11.6816 31.5556C11.6816 29.0741 13.6332 27.1065 15.9931 27.1065C18.3531 27.1065 20.3047 29.0741 20.3047 31.5556C20.3047 34.0372 18.3531 36.0047 15.9931 36.0047C13.6332 36.0047 11.6816 34.0372 11.6816 31.5556ZM17.15 31.5556C17.15 30.9923 16.6533 30.4915 15.9931 30.4915C15.333 30.4915 14.8363 30.9923 14.8363 31.5556C14.8363 32.1189 15.333 32.6197 15.9931 32.6197C16.6533 32.6197 17.15 32.1189 17.15 31.5556ZM23.9855 31.5556C23.9855 29.0741 25.937 27.1065 28.297 27.1065C30.657 27.1065 32.6085 29.0741 32.6085 31.5556C32.6085 34.0372 30.657 36.0047 28.297 36.0047C25.937 36.0047 23.9855 34.0372 23.9855 31.5556ZM29.4539 31.5556C29.4539 30.9923 28.9571 30.4915 28.297 30.4915C27.6369 30.4915 27.1402 30.9923 27.1402 31.5556C27.1402 32.1189 27.6369 32.6197 28.297 32.6197C28.9571 32.6197 29.4539 32.1189 29.4539 31.5556Z"
								></path>
							</svg>
							{cart > 0 && (
								<div className="lg:right-3.5 lg:w-5 lg:h-5 lg:font-semibold lg:text-xs bg-red absolute top-3 right-3.5 bg-red-600 w-3 h-3 rounded-full flex justify-center items-center text-white text-[10px]">
									<span>{cart}</span>
								</div>
							)}
						</Link>
					</div>
				</div>
			</div>
			<BuscadorMobile />
			<SegundoHeader
				spotOferta={spotOferta}
				spotExclusivos={spotExclusivos}
				spotServicios={spotServicios}
			/>

			{/* Este boton es para geolocalizacion pero aun no se esta utilizando */}
			{/* <div className="bg-white flex shadow-md lg:hidden justify-between">
        <div className="container pl-0 pr-0">
          <Button className="w-full">
            <div className="flex gap-3 px-4 py-2 items-center w-full"></div>
          </Button>
        </div>
      </div> */}
		</header>
	);
}
