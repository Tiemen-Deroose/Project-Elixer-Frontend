export default function Art(props) {
    const { title, material, medium, size, image_url, price } = props;
    return (
        <div className="bg-green-100 m-4 p-2 w-80">
            <div>
                <p className="text-xl font-bold">{title}</p>
                <p className="text-s text-opacity-50 mb-2 italic">({material})</p>
            </div>
            <img src={image_url}/>
            <div>
                <p>{size} painting made with {medium}</p>
                <p>Sold at €{price}</p>
            </div>
        </div>
    );
}