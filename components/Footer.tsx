import FooterContent from "components/FooterContent";

export default async function Footer() {
	let linksFooter: string = "";
	let termsConditionsFooter: string = "";

	const resLinks = await fetch(`${process.env.DASHBOARD_URL}/api/links-footer`);
	const links = await resLinks.json();
	linksFooter =
		links?.data.MarketingSpotData[0]?.baseMarketingSpotActivityData[0]
			?.marketingContentDescription[0]?.marketingText || "";

	const resTerms = await fetch(
		`${process.env.DASHBOARD_URL}/api/terms-condition-footer`
	);
	const terms = await resTerms.json();
	termsConditionsFooter =
		terms?.data.MarketingSpotData[0]?.baseMarketingSpotActivityData[0]
			?.marketingContentDescription[0]?.marketingText || "";

	return (
		<div>
			<FooterContent
				data={{
					linksFooter,
					termsConditionsFooter,
				}}
			/>
		</div>
	);
}
