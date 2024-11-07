"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import { Buscador } from "components/Buscador";
import { useEffect } from "react";

export default function MenuMobile({
	ofertaMobile,
	exclusivosMobile,
	serviciosMobile,
}: {
	ofertaMobile: string;
	exclusivosMobile: string;
	serviciosMobile: string;
}) {
	const [open, setOpen] = useState<boolean>(false);
	const [selectOption, setSelectOption] = useState("0");
	const [openIndex, setOpenIndex] = useState<number>(-1);
	const [name, setName] = useState<string>("");

	const cerrarModal = () => {
		setOpenIndex(-1);
	};

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
		<div>
			<div className="flex lg:pl-8 lg:p-2 py-1 px-4 gap-4 items-center mt-2 mb-1">
				<div className={`block lg:hidden`} onClick={() => setOpen(!open)}>
					<div className="h-0.5 bg-[#016db6] w-9"></div>
					<div className="text-[10px] font-bold ml-1 my-0.5 text-[#016db6]">
						MENÚ
					</div>
					<div className="h-0.5 bg-[#016db6] w-9"></div>
				</div>
				<Link href="https://www.coppel.com">
					<img
						className="w-full max-w-36 w-[136px] lg:w-full"
						src="/logo.svg"
						alt="Logo coppel"
					/>
				</Link>
				<div className="lg:flex hidden">
					{/** ya no se esta usando todo el sitio
          <SelectBusqueda setSelectOption={setSelectOption} />
          */}
					<Buscador selectOption={selectOption} />
				</div>
			</div>
			{open && (
				<div className="fixed top-0 left-0 w-full bg-[#ffffff] z-50 h-full overflow-auto">
					<div className="bg-[#FFDD2F] p-4">
						<Link href="https://www.coppel.com">
							<img
								className="w-full max-w-[100px] "
								src="/l/logo.svg"
								alt="Logo coppel"
							/>
						</Link>
						<div>
							<svg
								className="h-6 w-6 absolute top-4 right-4"
								onClick={() => setOpen(false)}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M21.7803 3.28033C22.0732 2.98744 22.0732 2.51256 21.7803 2.21967C21.4874 1.92678 21.0126 1.92678 20.7197 2.21967L12 10.9393L3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967C1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L10.9393 12L2.21967 20.7197C1.92678 21.0126 1.92678 21.4874 2.21967 21.7803C2.51256 22.0732 2.98744 22.0732 3.28033 21.7803L12 13.0607L20.7197 21.7803C21.0126 22.0732 21.4874 22.0732 21.7803 21.7803C22.0732 21.4874 22.0732 21.0126 21.7803 20.7197L13.0607 12L21.7803 3.28033Z"
									fill="#1B1A16"
								></path>
							</svg>
						</div>
					</div>
					<div className="bg-[#FFEC99] p-2 block justify-around">
						<div className="absolute mt-2 ml-2">
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M14 0.5C6.54416 0.5 0.5 6.54416 0.5 14C0.5 18.3138 2.52335 22.1551 5.67279 24.6265C5.69313 24.6437 5.714 24.66 5.73533 24.6753C8.01915 26.446 10.8865 27.5 14 27.5C21.4558 27.5 27.5 21.4558 27.5 14C27.5 6.54416 21.4558 0.5 14 0.5ZM7.92604 23.7669C9.68863 24.8654 11.7702 25.5 14 25.5C16.2292 25.5 18.3103 24.8657 20.0726 23.7677C18.3499 22.4136 16.213 21.6665 13.9988 21.6665C11.7851 21.6665 9.64862 22.4133 7.92604 23.7669ZM21.7142 22.529C24.0393 20.4247 25.5 17.3829 25.5 14C25.5 7.64873 20.3513 2.5 14 2.5C7.64873 2.5 2.5 7.64873 2.5 14C2.5 17.3824 3.96023 20.4237 6.28467 22.5279C8.4229 20.6884 11.158 19.6665 13.9988 19.6665C16.8402 19.6665 19.5758 20.6888 21.7142 22.529ZM7.16667 11.5C7.16667 7.72605 10.2261 4.66667 14 4.66667C17.7739 4.66667 20.8333 7.72605 20.8333 11.5C20.8333 15.2739 17.7739 18.3333 14 18.3333C10.2261 18.3333 7.16667 15.2739 7.16667 11.5ZM14 6.66667C11.3306 6.66667 9.16667 8.83062 9.16667 11.5C9.16667 14.1694 11.3306 16.3333 14 16.3333C16.6694 16.3333 18.8333 14.1694 18.8333 11.5C18.8333 8.83062 16.6694 6.66667 14 6.66667Z"
									fill="#1B1A16"
								></path>
							</svg>{" "}
						</div>
						<div className="flex items-center ml-[52px]">
							<p className="text-md">¡Hola!</p>
						</div>
						<div className="flex gap-4 ml-[52px]">
							<Link
								className="text-[#006FB9]"
								href="https://www.coppel.com/LogonForm?myAcctMain=1&catalogId=10051&langId=-5&storeId=10151"
							>
								Iniciar sesión
							</Link>
							<Link
								className="text-[#006FB9]"
								href="https://www.coppel.com/UserRegistrationForm?myAcctMain=1&catalogId=10051&registerNew=Y&storeId=10151&langId="
							>
								Crear cuenta
							</Link>
						</div>
					</div>
					<ul className=" space-y-4 pt-4 pb-4 border-b bg-white">
						<li className="px-4">
							<Link href="https://www.coppel.com/StatementAccount?catalogId=10051&storeId=10151&langId=-5">
								Estado de cuenta
							</Link>
						</li>
						<li className="px-4">
							<Link href="https://tucredito.bancoppel.com/solicita-tu-credito">
								Soliciar Crédito Coppel
							</Link>
						</li>
						<li className="px-4">
							<Link href="https://www.coppel.com/abonar-en-linea">
								Conoce cómo abonar
							</Link>
						</li>
						<li className="px-4">
							<Link href="https://www.coppel.com/solicitar-prestamo-personal">
								Préstamo personal
							</Link>
						</li>
					</ul>
					<ul className=" border-b space-y-2 py-1 bg-white">
						{/* AGREGUE DEPARTAMENTOS */}
						<li className="">
							<Collapsible
								open={openIndex === 0}
								onOpenChange={(open: any) => setOpenIndex(open ? 0 : -1)}
							>
								<CollapsibleTrigger asChild>
									<div className="px-4 py-2 font-semibold text-black ofertasMenu flex gap-2 justify-between">
										<div className="flex gap-2">
											<img
												className="w-6 mr-1"
												alt="department_icon"
												src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Menu_Icono_Departamentos.svg"
											/>
											<p className="mt-1">Departamentos</p>
										</div>
										<ChevronRight
											className={`rightic text-[#006FB9] rounded-full bg-[#F1F4FA] ${
												openIndex === 0 && "transform rotate-180"
											}`}
										/>
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="pruebas">
									<button
										type="button"
										data-testid="mobile_back"
										className="boton-inicio"
										onClick={cerrarModal}
									>
										<span>
											<svg
												width="28"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-1"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.0303 2.71967C12.3232 3.01256 12.3232 3.48744 12.0303 3.78033L4.56066 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H4.56066L12.0303 20.2197C12.3232 20.5126 12.3232 20.9874 12.0303 21.2803C11.7374 21.5732 11.2626 21.5732 10.9697 21.2803L2.21967 12.5303C1.92678 12.2374 1.92678 11.7626 2.21967 11.4697L10.9697 2.71967C11.2626 2.42678 11.7374 2.42678 12.0303 2.71967Z"
													fill="#006FB9"
												></path>
											</svg>
											<p className="text-[#006fb9] font-bold ml-2">Inicio</p>
										</span>
									</button>
									<ul className="py-3 px-5">
										<div className="mb-3">
											<p className="text-2xl font-bold">Hogar</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Furniture.svg"
													alt="Icono de Hogar y Muebles"
												/>
												<Link href="https://www.coppel.com/hogar">
													Hogar y Muebles
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/White_Goods.svg"
													alt="Icono de Línea Blanca"
												/>
												<Link href="https://www.coppel.com/linea-blanca-electrodomesticos">
													Línea Blanca
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Home appliances.svg"
													alt="Icono de Cocina y Electrodomésticos"
												/>
												<Link href="https://www.coppel.com/cocina-electrodomesticos">
													Cocina y Electrodomésticos
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Home.svg"
													alt="Icono de Ferretería y Mejoras del Hogar"
												/>
												<Link href="https://www.coppel.com/ferreteria-y-mejoras-del-hogar">
													Ferreteria y Mejoras del Hogar
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Tecnología</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Phones.svg"
													alt="Icono de Celulares"
												/>
												<Link href="https://www.coppel.com/celulares">
													Celulares
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Electronics.svg"
													alt="Icono de Electrónica"
												/>
												<Link href="https://www.coppel.com/electronica">
													Electrónica
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Videogames.svg"
													alt="Icono de Consolas y Videojuegos"
												/>
												<Link href="https://www.coppel.com/consolas-videojuegos">
													Consolas y Videojuegos
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Ropa y zapatos</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Shoes.svg"
													alt="Icono de Zapatos"
												/>
												<Link href="https://www.coppel.com/zapatos">
													Zapatos
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Baby.svg"
													alt="Icono de Bebés"
												/>
												<Link href="https://www.coppel.com/bebes">Bebés</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Kids.svg"
													alt="Icono de Niños y Adolescentes"
												/>
												<Link href="https://www.coppel.com/ninos-y-adolescentes">
													Niños y Adolescentes
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Man.svg"
													alt="Icono de Hombres"
												/>
												<Link href="https://www.coppel.com/hombres">
													Hombres
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Woman.svg"
													alt="Icono de Mujeres"
												/>
												<Link href="https://www.coppel.com/mujeres">
													Mujeres
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Accesorios</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Bags.svg"
													alt="Icono de Maletas, Bolsas y Mochilas"
												/>
												<Link href="https://www.coppel.com/maletas-bolsas-y-mochilas">
													Maletas, Bolsas y Mochilas
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Watches.svg"
													alt="Icono de Relojes Lentes y Joyería"
												/>
												<Link href="https://www.coppel.com/relojes-lentes-joyeria">
													Relojes Lentes y Joyería
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Salud</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Perfums.svg"
													alt="Icono de Belleza y Cuidado Personal"
												/>
												<Link href="https://www.coppel.com/perfumes-y-cuidado-personal">
													Belleza y Cuidado Personal
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													className="w-6"
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Salud_y_bienestar.svg"
													alt="Icono de Salud y Bienestar"
												/>
												<Link href="https://www.coppel.com/salud-y-bienestar">
													Salud y Bienestar
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Movilidad</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Moto.svg"
													alt="Icono de Motos y movilidad"
												/>
												<Link href="https://www.coppel.com/motos-y-movilidad">
													Motos y movilidad
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Cars.svg"
													alt="Icono de Automotriz y Refacciones"
												/>
												<Link href="https://www.coppel.com/automotriz-y-refacciones">
													Automotriz y Refacciones
												</Link>
											</li>
										</div>

										<div className="mb-3">
											<p className="text-2xl font-bold">Entretenimiento</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Sports.svg"
													alt="Icono de Deportes"
												/>
												<Link href="https://www.coppel.com/deportes">
													Deportes
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Toys.svg"
													alt="Icono de Juguetes"
												/>
												<Link href="https://www.coppel.com/juguetes">
													Juguetes
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Music.svg"
													alt="Icono de Instrumentos Musicales"
												/>
												<Link href="https://www.coppel.com/instrumentos-musicales">
													Instrumentos Musicales
												</Link>
											</li>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Books.svg"
													alt="Icono de Libros"
												/>
												<Link href="https://www.coppel.com/libros-revistas-y-comics">
													Libros, Revistas y Cómics
												</Link>
											</li>
										</div>

										<div className="mb-8">
											<p className="text-2xl font-bold">Otras categorías</p>
											<li className="gap-2 text-base py-3 flex items-center">
												<img
													src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Pets.svg"
													alt="Icono de Mascotas"
												/>
												<Link href="https://www.coppel.com/mascotas">
													Mascotas
												</Link>
											</li>
										</div>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</li>
						{/*ACABA DEPARTAMENTOS NUEVA PRUEBA */}

						<li className="">
							<Collapsible
								open={openIndex === 1}
								onOpenChange={(open) => setOpenIndex(open ? 1 : -1)}
							>
								<CollapsibleTrigger asChild>
									<div className="px-4 py-2 font-semibold text-[#D6281B] ofertasMenu flex gap-2 justify-between">
										<div className="flex gap-2">
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
												className="mr-1"
											>
												{" "}
												<path
													fill="currentColor"
													d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"
												></path>{" "}
											</svg>{" "}
											Ofertas
										</div>
										<ChevronRight
											className={`rightic text-[#d3273e] rounded-full bg-[#F1F4FA] ${
												openIndex === 1 && "transform rotate-180"
											}`}
										/>
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="pruebas">
									<button
										type="button"
										data-testid="mobile_back"
										className="boton-inicio"
										onClick={cerrarModal}
									>
										<span>
											<svg
												width="28"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-1"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.0303 2.71967C12.3232 3.01256 12.3232 3.48744 12.0303 3.78033L4.56066 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H4.56066L12.0303 20.2197C12.3232 20.5126 12.3232 20.9874 12.0303 21.2803C11.7374 21.5732 11.2626 21.5732 10.9697 21.2803L2.21967 12.5303C1.92678 12.2374 1.92678 11.7626 2.21967 11.4697L10.9697 2.71967C11.2626 2.42678 11.7374 2.42678 12.0303 2.71967Z"
													fill="#006FB9"
												></path>
											</svg>
											<p className="text-[#006fb9] font-bold ml-2">Inicio</p>
										</span>
									</button>
									<ul className="">
										<div
											className="ofertasMenu border-none"
											dangerouslySetInnerHTML={{
												__html: ofertaMobile,
											}}
										/>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</li>

						<li className="">
							<Collapsible
								open={openIndex === 2}
								onOpenChange={(open) => setOpenIndex(open ? 2 : -1)}
							>
								<CollapsibleTrigger asChild>
									<div className="px-4 py-1 font-semibold text-black ofertasMenu flex gap-2 justify-between">
										<div className="flex gap-2">
											<p className="mt-1">Servicios</p>
										</div>
										<ChevronRight
											className={`rightic text-[#006FB9] rounded-full bg-[#F1F4FA] ${
												openIndex === 2 && "transform rotate-180"
											}`}
										/>
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="pruebas">
									<button
										type="button"
										data-testid="mobile_back"
										className="boton-inicio"
										onClick={cerrarModal}
									>
										<span>
											<svg
												width="28"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-1"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.0303 2.71967C12.3232 3.01256 12.3232 3.48744 12.0303 3.78033L4.56066 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H4.56066L12.0303 20.2197C12.3232 20.5126 12.3232 20.9874 12.0303 21.2803C11.7374 21.5732 11.2626 21.5732 10.9697 21.2803L2.21967 12.5303C1.92678 12.2374 1.92678 11.7626 2.21967 11.4697L10.9697 2.71967C11.2626 2.42678 11.7374 2.42678 12.0303 2.71967Z"
													fill="#006FB9"
												></path>
											</svg>
											<p className="text-[#006fb9] font-bold ml-2">Inicio</p>
										</span>
									</button>
									<ul className="">
										<div
											className="ofertasMenu border-none"
											dangerouslySetInnerHTML={{
												__html: serviciosMobile,
											}}
										/>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</li>

						{/* AGREGUE SIGUE TUS PEDIDOS */}
						<li className="">
							<Collapsible
								open={openIndex === 3}
								onOpenChange={(open) => setOpenIndex(open ? 3 : -1)}
							>
								<CollapsibleTrigger asChild>
									<div className="px-4 py-2 font-semibold text-black ofertasMenu flex gap-2 justify-between">
										<div className="flex gap-2">
											<img
												className="w-full max-w-6 w-4"
												alt="Sigue tus pedidos"
												src="https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Menu_Icono_Siguetuspedidos.svg"
												loading="lazy"
											/>
											<p className="mt-1">Sigue tus pedidos</p>
										</div>
										<ChevronRight
											className={`rightic text-[#006FB9] rounded-full bg-[#F1F4FA] ${
												openIndex === 3 && "transform rotate-180"
											}`}
										/>
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="pruebas">
									<button
										type="button"
										data-testid="mobile_back"
										className="boton-inicio"
										onClick={cerrarModal}
									>
										<span>
											<svg
												width="28"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="mr-1"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.0303 2.71967C12.3232 3.01256 12.3232 3.48744 12.0303 3.78033L4.56066 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H4.56066L12.0303 20.2197C12.3232 20.5126 12.3232 20.9874 12.0303 21.2803C11.7374 21.5732 11.2626 21.5732 10.9697 21.2803L2.21967 12.5303C1.92678 12.2374 1.92678 11.7626 2.21967 11.4697L10.9697 2.71967C11.2626 2.42678 11.7374 2.42678 12.0303 2.71967Z"
													fill="#006FB9"
												></path>
											</svg>
											<p className="text-[#006fb9] font-bold ml-2">Inicio</p>
										</span>
									</button>
									<ul className="p-5">
										<li>Sigue tus pedidos</li>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</li>
						{/*ACABA SIGUE TU PEDIDO*/}
					</ul>

					<ul className="bg-[#ffffff]">
						<li className="px-4 py-3">
							<Link href="https://coppel.onelink.me/tkwG/iarPabHE">
								Descarga la App
							</Link>
						</li>
						<li className="px-4 py-3">
							<Link href="https://www.coppel.com/ubicacion-de-tiendas-coppel">
								Ubica tu tienda
							</Link>
						</li>
						<li className="px-4 py-3">
							<Link href="https://www.coppel.com/ubicacion-de-tiendas-coppel">
								Preguntas frecuentes
							</Link>
						</li>
						<li className="px-4 py-3">
							<Link href="https://www.coppel.com/ubicacion-de-tiendas-coppel">
								Aviso de privacidad
							</Link>
						</li>
						<li className="px-4 py-3">
							<Link href="https://www.coppel.com/ubicacion-de-tiendas-coppel">
								Terminos y condiciones
							</Link>
						</li>
						{name && (
							<li
								className="px-4 py-3"
								onClick={() => {
									logOut("WC_LogonUserId_");
								}}
							>
								Cerrar sesión
							</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
