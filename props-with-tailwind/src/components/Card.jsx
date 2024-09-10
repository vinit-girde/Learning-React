const Card = ({ title = "Card Title", content = "Card Content" }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-50">
      <img
        className="w-full rounded-2xl object-cover"
        src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Nike AirMax Pro"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
      </div>
    </div>
  );
};

export default Card;
