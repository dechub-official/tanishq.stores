export default function LatestCollection({img}) {
    return <>
    <div className="md:max-w-[350px] md:min-w-[100px]  md:min-h-[250px] md:max-h-[530px]">
    <img src={img} alt="" className="rounded-[25px] h-full" />
    </div>
    </>
}