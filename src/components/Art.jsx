export default function Art(props) {
    const { title, description, material, size, price } = props;
    return (
        <div className="bg-green-100 m-4 p-2 w-80">
            <p className="text-xl font-bold mb-4">{title}</p>
            <p>{description}</p>
            <p>{size} painting made with {material}</p>
            <p>Sold at €{price}</p>
        </div>
    );
}