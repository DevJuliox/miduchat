"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Buscador({ selectOption }: any) {
	const query = "query";
	const storeId = "10151";
	const catalogId = "10051";
	const [busqueda, setBusqueda] = useState("");

	return (
		<div className="flex items-center mt-1">
			<Input
				type="email"
				placeholder="Busca tus productos"
				className="hover:border-[#145b97] transiton duration-200 focus:ring-offset-0 outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none shadow-none rounded-l-lg rounded-r-none border focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 h-8 w-[444px]"
				onChange={(e) => setBusqueda(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						window.location.href = `https://www.coppel.com/SearchDisplay?categoryId=${selectOption}&storeId=${storeId}&catalogId=${catalogId}&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=24&userId=1521084195.1680639059&searchTerm=${busqueda}&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D`;
					}
				}}
			/>
			<Link
				href={`https://www.coppel.com/SearchDisplay?categoryId=${selectOption}&storeId=${storeId}&catalogId=${catalogId}&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=24&userId=1521084195.1680639059&searchTerm=${busqueda}&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D`}
			>
				<Button
					type="submit"
					size="icon"
					className="h-8 rounded-none rounded-r-md border-none bg-[#016db6] w-9 my-px"
				>
					<svg
						fill="white"
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.19767 1.5C4.49865 1.5 1.5 4.49865 1.5 8.19767C1.5 11.8967 4.49865 14.8953 8.19767 14.8953C10.0714 14.8953 11.7643 14.1269 12.9808 12.886C14.1659 11.6771 14.8953 10.0233 14.8953 8.19767C14.8953 4.49865 11.8967 1.5 8.19767 1.5ZM0 8.19767C0 3.67022 3.67022 0 8.19767 0C12.7251 0 16.3953 3.67022 16.3953 8.19767C16.3953 10.1664 15.7005 11.9741 14.544 13.3871L19.7851 18.7245C20.0753 19.0201 20.071 19.4949 19.7755 19.7851C19.4799 20.0753 19.0051 20.071 18.7149 19.7755L13.492 14.4566C12.0641 15.6655 10.2156 16.3953 8.19767 16.3953C3.67022 16.3953 0 12.7251 0 8.19767Z"
							fill="white"
						></path>
					</svg>{" "}
				</Button>
			</Link>
		</div>
	);
}
