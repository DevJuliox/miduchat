import Link from "next/link";

export default function FooterContent({ data }: any) {
	let html: string | null = null;
	let privacy: string | null = null;

	const scriptRegex = /<script[^>]*>([\w\W]*?)<\/script>/g;
	const cleanedHtml = data?.termsConditionsFooter.replace(scriptRegex, "");
	privacy = cleanedHtml;

	html = data?.linksFooter
		.replace(/src="[^"]*"/g, "")
		.replace(/data-original="([^"]*)"/g, 'src="$1"');

	return (
		<div>
			<div>
				<Link href="#">
					<div className="bg-[#1f3545] text-white p-2 flex justify-center cursor-pointer">
						<p className="text-base font-bold">Ir arriba</p>
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							data-testid="slide_start_icon"
							className=" ml-2 mt-1"
						>
							<path
								d="M14.9671 8.8307L9.52695 2.74181C9.26276 2.47546 8.90656 2.3168 8.52912 2.29736C8.15169 2.3168 7.79549 2.47546 7.53129 2.74181L2.09116 8.85292C2.00836 8.92761 1.94256 9.01873 1.89808 9.12029C1.85361 9.22184 1.83146 9.33153 1.83309 9.44213C1.83473 9.55273 1.86012 9.66174 1.90758 9.76197C1.95505 9.86221 2.02352 9.9514 2.10849 10.0237C2.19345 10.096 2.29299 10.1497 2.40054 10.1813C2.5081 10.213 2.62123 10.2218 2.7325 10.2072C2.84376 10.1927 2.95064 10.1551 3.04609 10.0969C3.14154 10.0387 3.22341 9.96121 3.28629 9.86959L7.48619 5.16959C7.5052 5.14782 7.53058 5.13239 7.55885 5.12543C7.58712 5.11846 7.61688 5.1203 7.64404 5.1307C7.67031 5.14068 7.69294 5.15819 7.70901 5.18096C7.72509 5.20374 7.73388 5.23073 7.73424 5.25847V14.8474C7.73424 14.9502 7.7548 15.0521 7.79475 15.1471C7.83469 15.2422 7.89325 15.3285 7.96706 15.4013C8.04087 15.474 8.1285 15.5317 8.22493 15.5711C8.32137 15.6104 8.42474 15.6307 8.52912 15.6307C8.63351 15.6307 8.73687 15.6104 8.83331 15.5711C8.92975 15.5317 9.01738 15.474 9.09119 15.4013C9.165 15.3285 9.22355 15.2422 9.2635 15.1471C9.30344 15.0521 9.324 14.9502 9.324 14.8474V5.25847C9.32437 5.23073 9.33316 5.20374 9.34923 5.18096C9.36531 5.15819 9.38794 5.14068 9.4142 5.1307C9.44136 5.1203 9.47113 5.11846 9.4994 5.12543C9.52766 5.13239 9.55305 5.14782 9.57205 5.16959L13.7719 9.86959C13.8412 9.94692 13.9252 10.0101 14.0192 10.0554C14.1131 10.1007 14.2153 10.1274 14.3197 10.1339C14.4241 10.1403 14.5288 10.1264 14.6278 10.093C14.7268 10.0596 14.8181 10.0072 14.8966 9.93903C14.9751 9.87082 15.0392 9.78804 15.0852 9.69542C15.1312 9.6028 15.1582 9.50216 15.1648 9.39925C15.1713 9.29633 15.1572 9.19315 15.1233 9.0956C15.0894 8.99804 15.0363 8.90803 14.9671 8.8307Z"
								fill="white"
							></path>
						</svg>{" "}
					</div>
				</Link>
			</div>
			<footer className="bg-[#192c39] text-white">
				<div
					className="links"
					dangerouslySetInnerHTML={{ __html: html || "" }}
				/>
				<div
					className="bg-[#1D2C38] links2 links"
					dangerouslySetInnerHTML={{
						__html: privacy ? privacy : "",
					}}
				/>
			</footer>
		</div>
	);
}