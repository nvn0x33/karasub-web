export default function HeadDesc({
    headline,
    desc,
}: {
    headline: string;
    desc: string;
}) {
    return (
        <div className="text-center">
            <h2 className="text-headline text-size-headline font-semibold">
                {headline}
            </h2>
            <p className="text-desc text-size-desc mt-2">{desc}</p>
        </div>
    );
}
