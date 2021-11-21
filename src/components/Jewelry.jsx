export default function Jewelry(props) {
    const { id, name, category, material, colour, image_url, price } = props;
    return (
        <div className="bg-green-200 m-4 w-80 border-2 border-black rounded">
            <div>
                <p className="text-xl font-bold m-3">
                    <span className="bg-green-400 px-2 py-1 border-2 rounded-lg border-green-500">{name}</span>
                </p>
                <img className="border-t-2 border-b-2 border-black" src={image_url} />
            </div>
            <div className="m-2">
                <p>{colour} {category} made out of {material}</p>
                <p>Sold at €{price}</p>
            </div>
        </div>
    );
}