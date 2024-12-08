const ProductCard = ({ image, title, price }: { image: string; title: string; price: string }) => {
    return (
      <div className="border rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-blue-600 font-bold">${price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  