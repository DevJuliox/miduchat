import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Item, Portal } from "@radix-ui/react-dropdown-menu";
import { menuData } from "./menuData";

interface MenuItem {
	label: string;
	link: string;
	icon?: string;
	title?: string;
	subMenu?: MenuItem[]; // subMenu es opcional
	btnOfertas?: string;
	linkOfertas?: string;
}

export default function SegundoHeader({
	spotOferta,
	spotExclusivos,
	spotServicios,
}: {
	spotOferta: string;
	spotExclusivos: string;
	spotServicios: string;
}) {
	const [IconoOfeOpen, setIconoOfeOpen] = useState(false);
	const [IconoServOpen, setIconoServOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const ofertarotar = (open: boolean) => {
		setIconoOfeOpen(open);
	};
	const servrotar = (open: boolean) => {
		setIconoServOpen(open);
	};

	const [activeMenuLevel1, setActiveMenuLevel1] = useState<string | null>(null);
	const [activeMenuLevel2, setActiveMenuLevel2] = useState<string | null>(null);
	const [activeMenuLevel3, setActiveMenuLevel3] = useState<string | null>(null);

	const closeTimeout = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnterLevel2 = (label: string) => {
		setActiveMenuLevel2(label);
		setActiveMenuLevel3(null); // Resetear el nivel 3

		if (closeTimeout.current) {
			clearTimeout(closeTimeout.current); // Cancelamos cualquier timeout de cierre
		}
	};

	const handleMouseEnterLevel3 = (label: string) => {
		setActiveMenuLevel3(label);

		if (closeTimeout.current) {
			clearTimeout(closeTimeout.current); // Cancelamos cualquier timeout de cierre
		}
	};

	// Función para cerrar los menús si el mouse sale del área (con retraso)

	const handleMouseLeaveWithDelay = () => {
		closeTimeout.current = setTimeout(() => {
			setActiveMenuLevel2(null);
			setActiveMenuLevel3(null);
		}, 100); // Le damos 100ms de tiempo antes de cerrar
	};

	// Función para cancelar el cierre cuando el mouse entra de nuevo
	const cancelClose = () => {
		if (closeTimeout.current) {
			clearTimeout(closeTimeout.current);
		}
	};

	// Función para abrir/cerrar el menú de nivel 1 con un clic
	const toggleMenuLevel1 = () => {
		if (activeMenuLevel1 === "Departamentos") {
			setActiveMenuLevel1(null); // Cerrar el menú
			setIsMenuOpen(false); // Ocultar el overlay
		} else {
			setActiveMenuLevel1("Departamentos"); // Abrir el menú
			setIsMenuOpen(true); // Mostrar el overlay
		}
	};

	const menuRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setActiveMenuLevel1(null); // Cierra el menú si el clic es fuera del contenedor
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		// Limpieza al desmontar el componente
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	return (
		<div>
			<div className="bg-white hidden shadow-md lg:flex justify-between pr-4 pl-4">
				<div ref={menuRef}>
					<ul className="flex p-4 gap-4">
						<li className="relative flex items-center semibold">
							<div
								className="flex items-center font-semibold cursor-pointer"
								onClick={toggleMenuLevel1} // Cambiamos de hover a click
							>
								Departamentos
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`w-5 ml-2 ${activeMenuLevel1 ? "rotate-180" : ""}`}
									viewBox="0 0 48 49"
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

							{isMenuOpen && (
								<div
									className="fixed inset-0 bg-black bg-opacity-40 z-30 overlayconfig"
									onClick={() => {
										setActiveMenuLevel1(null); // Cierra el menú cuando se hace clic fuera
										setIsMenuOpen(false); // Oculta el overlay
									}}
								/>
							)}

							{/* Menu Nivel 1 */}
							{activeMenuLevel1 === "Departamentos" && (
								<ul
									className="absolute top-10 left-0 bg-white shadow-lg p-2 w-64 z-40 menu ml-[-30px]"
									onMouseLeave={handleMouseLeaveWithDelay}
									onMouseEnter={cancelClose}
								>
									{menuData.map((item: MenuItem) => (
										//Titulo divisor de secciones en nivel 1
										<div key={item.label}>
											{item.title && (
												<p className="font-bold text-xl my-3 ml-2">
													{item.title}
												</p>
											)}
											{/* Enlace que abarcando iconos y texto */}
											<Link href={item.link}>
												<li
													onMouseEnter={() =>
														handleMouseEnterLevel2(item.label)
													}
													className="cursor-pointer p-2 flex opciones-niveles mb-2"
												>
													<div className="flex items-center gap-2">
														{item.icon && (
															<img
																src={item.icon}
																className="w-[24px] h-[24px]"
															></img>
														)}
														{item.label}
													</div>

													{item.subMenu && (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 16 17"
															fill="none"
															className="iconosdep"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M4.64648 2.07955C4.45121 2.27481 4.45121 2.5914 4.64648 2.78666L10.4596 8.59977L4.64648 14.4129C4.45121 14.6081 4.45121 14.9247 4.64648 15.12C4.84174 15.3153 5.15832 15.3153 5.35358 15.12L11.2845 9.18903C11.61 8.86359 11.61 8.33595 11.2845 8.01052L5.35358 2.07955C5.15832 1.88429 4.84174 1.88429 4.64648 2.07955Z"
																fill="white"
															></path>
														</svg>
													)}
												</li>
											</Link>
										</div>
									))}
								</ul>
							)}

							{/* Menu Nivel 2 */}
							{activeMenuLevel2 && (
								<ul
									className="absolute top-10 left-[20rem] bg-white shadow-lg p-4 menulvl2 z-40 menu"
									onMouseLeave={handleMouseLeaveWithDelay} // Usamos el retraso para el cierre
									onMouseEnter={cancelClose} // Cancelamos el cierre si el mouse vuelve a entrar
								>
									{menuData
										.find((item: MenuItem) => item.label === activeMenuLevel2)
										?.subMenu?.map(
											(subItem: MenuItem, index: number, arr: MenuItem[]) => (
												//Ver ofertas junto a su enlace
												<>
													{subItem.linkOfertas && (
														<Link
															href={subItem.linkOfertas}
															className="ml-[6px] mb-2 text-[#006fb9] font-bold cursor-pointer"
														>
															{subItem.btnOfertas}
														</Link>
													)}

													{/* Titulo nivel 2 junto y su enlace */}
													<Link
														href={
															menuData.find(
																(item: MenuItem) =>
																	item.label === activeMenuLevel2
															)?.link || "#"
														}
													>
														<div className="ml-[6px] my-2 text-[20px] font-[500] cursor-pointer">
															{subItem.title}
														</div>
													</Link>

													{/* Label y su icono flecha derecha*/}
													<Link href={subItem.link}>
														<li
															key={subItem.label}
															onMouseEnter={() => {
																if (subItem.subMenu) {
																	handleMouseEnterLevel3(subItem.label); // Abre el nivel 3 si tiene subMenu
																} else {
																	setActiveMenuLevel3(null); // Cierra el nivel 3 si no tiene subMenu
																}
															}}
															className="cursor-pointer p-2 flex opciones-niveles text-[16px]"
														>
															{subItem.label}

															{subItem.subMenu && (
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="24"
																	height="24"
																	viewBox="0 0 16 17"
																	fill="none"
																	className="iconosdep"
																>
																	<path
																		fill-rule="evenodd"
																		clip-rule="evenodd"
																		d="M4.64648 2.07955C4.45121 2.27481 4.45121 2.5914 4.64648 2.78666L10.4596 8.59977L4.64648 14.4129C4.45121 14.6081 4.45121 14.9247 4.64648 15.12C4.84174 15.3153 5.15832 15.3153 5.35358 15.12L11.2845 9.18903C11.61 8.86359 11.61 8.33595 11.2845 8.01052L5.35358 2.07955C5.15832 1.88429 4.84174 1.88429 4.64648 2.07955Z"
																		fill="white"
																	></path>
																</svg>
															)}
														</li>
													</Link>
													{/* Boton ver Todo al final de la lista */}
													{index === arr.length - 1 && (
														<Link
															href={
																menuData.find(
																	(item: MenuItem) =>
																		item.label === activeMenuLevel2
																)?.link || "#"
															}
														>
															{" "}
															<div className="ml-[8px] mt-2 text-[#006fb9] font-bold cursor-pointer text-[16px]">
																Ver todo
															</div>
														</Link>
													)}
												</>
											)
										)}
								</ul>
							)}

							{/* Menu Nivel 3 */}
							{activeMenuLevel3 && (
								<ul
									className="absolute top-10 left-[41rem] bg-white shadow-lg p-4 w-64 z-40 menu menulvl3"
									onMouseLeave={handleMouseLeaveWithDelay} // Usamos el retraso para el cierre
									onMouseEnter={cancelClose} // Cancelamos el cierre si el mouse vuelve a entrar
								>
									{menuData
										.find((item: MenuItem) => item.label === activeMenuLevel2)
										?.subMenu?.find(
											(subItem: MenuItem) => subItem.label === activeMenuLevel3
										)

										?.subMenu?.map(
											(
												subSubItem: MenuItem,
												index: number,
												arr: MenuItem[]
											) => (
												<>
													<div className="ml-[6px] mb-2 text-[#006fb9] font-bold cursor-pointer">
														{subSubItem.btnOfertas}
													</div>
													{subSubItem.title && (
														<Link
															href={
																menuData
																	.find(
																		(item: MenuItem) =>
																			item.label === activeMenuLevel2
																	)
																	?.subMenu?.find(
																		(subItem: MenuItem) =>
																			subItem.label === activeMenuLevel3
																	)?.link || "#"
															} // Usar el link del nivel 2
															className="ml-[6px] text-[20px] font-[500] cursor-pointer block mt-7"
														>
															{subSubItem.title}
														</Link>
													)}
													<Link href={subSubItem.link}>
														<li
															key={subSubItem.label}
															className="cursor-pointer p-2 opciones-niveles my-2"
														>
															<div>{subSubItem.label}</div>
														</li>
													</Link>
													{index === arr.length - 1 && (
														<Link
															href={
																menuData
																	.find(
																		(item: MenuItem) =>
																			item.label === activeMenuLevel2
																	)
																	?.subMenu?.find(
																		(subItem: MenuItem) =>
																			subItem.label === activeMenuLevel3
																	)?.link || "#"
															}
														>
															<div className="ml-[8px] mt-2 text-[#006fb9] font-bold cursor-pointer text-[16px]">
																Ver todo
															</div>
														</Link>
													)}
												</>
											)
										)}
								</ul>
							)}
						</li>

						<li className="flex items-center text-red-600 font-semibold">
							<DropdownMenu onOpenChange={ofertarotar}>
								<DropdownMenuTrigger className="flex items-center font-semibold focus-visible:outline-none">
									{/* ICONO OFERTAS */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										className="ml-1 mr-2 w-4"
									>
										<path
											fill="currentColor"
											d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"
										></path>
									</svg>
									Ofertas
									{/* Icono sustituto a <ChevronDown className="h-4" />*/}
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className={`w-5 ml-2 ${IconoOfeOpen ? "rotate-180" : ""}`}
											viewBox="0 0 48 49"
											fill="none"
											aria-hidden="true"
											focusable="false"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M4.93934 14.0394C5.52513 13.4536 6.47487 13.4536 7.06066 14.0394L24.5 31.4788L41.9393 14.0394C42.5251 13.4536 43.4749 13.4536 44.0607 14.0394C44.6464 14.6252 44.6464 15.575 44.0607 16.1608L26.2678 33.9536C25.2915 34.93 23.7085 34.93 22.7322 33.9536L4.93934 16.1608C4.35355 15.575 4.35355 14.6252 4.93934 14.0394Z"
												fill="#d3273e"
											></path>
										</svg>
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="mt-2 border triangulo">
									<div className="flex flex-col gap-2 px-2 pt-2 w-60">
										<Link
											className="hover:bg-[#f2f3f5] p-2 rounded-lg"
											href="https://www.coppel.com/ofertas"
										>
											Mejores Ofertas
										</Link>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
						{/* <li className="flex items-center "> */}
						{/* Exclusivos en línea <ChevronDown className="h-4" /> */}
						{/* <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  Exclusivos en línea <ChevronDown className="h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="ofertas"
                  dangerouslySetInnerHTML={{
                    __html: spotExclusivos
                  }}
                ></DropdownMenuContent>
              </DropdownMenu>
            </li>*/}
						<li className="flex items-center ">
							{/* Servicios <ChevronDown className="h-4" /> */}
							<DropdownMenu onOpenChange={servrotar}>
								<DropdownMenuTrigger className="flex items-center focus-visible:outline-none">
									Servicios
									{/* Icono sustituto a <ChevronDown className="h-4" />*/}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={`w-5 ml-2 ${IconoServOpen ? "rotate-180" : ""}`}
										viewBox="0 0 48 49"
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
								</DropdownMenuTrigger>
								<DropdownMenuContent className="mt-3">
									<div
										className="flex flex-col gap-2 ml-2 py-2 w-64"
										style={{
											overflow: "auto",
											scrollbarColor: "transparent transparent",
											maxHeight: "70vh",
										}}
									>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppeldigital.com/"
										>
											Recargas y Contenidos
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.redicoppel.com/"
										>
											rediCoppel
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/coppel-pay"
										>
											Coppel Pay
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.fundacioncoppel.org/"
										>
											Fundacion Coppel
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/club-de-proteccion"
										>
											Club de Protección
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://viajes.coppel.com/"
										>
											Coppel viajes
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/cliente-digital"
										>
											Cliente digital
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/coppel-salud"
										>
											Farmacia Coppel Salud
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/coppel-max"
										>
											Coppel Max
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/ganadores-de-concursos"
										>
											Concursos
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/blog"
										>
											Blog Mejora tu vida
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="http://periodicosyrevistas.coppel.com/periodico/RegresoaClases?utm_source=SitioWeb&utm_medium=Servicios&utm_campaign=PC_RAC2024"
										>
											Periódico Coppel
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://periodicosyrevistas.coppel.com/?utm_source=Sitioweb&utm_medium=Servicios&utm_campaign=Repositorio"
										>
											Periódicos y Revistas Coppel
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://periodicosyrevistas.coppel.com/revista/Motos1?utm_source=SitioWeb&utm_medium=Servicios&utm_campaign=MotosUno2024"
										>
											Revista Coppel Motos
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/politicas-de-servicio-de-remesas"
										>
											Políticas de servicios de remesas
										</Link>
										<Link
											className="hover:bg-[#eee] p-2 rounded-lg"
											href="https://www.coppel.com/soluciones"
										>
											Coppel Soluciones
										</Link>
									</div>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex p-4 gap-4">
						<li>
							<Link href="https://www.coppel.com/ubicacion-de-tiendas-coppel">
								Ubica tu tienda
							</Link>
						</li>
						<li>
							<Link href="https://www.coppel.com/rastrea-tus-pedidos">
								Sigue tus pedidos
							</Link>
						</li>
						<li>
							<Link href="https://centrodeayuda.coppel.com">Ayuda</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
