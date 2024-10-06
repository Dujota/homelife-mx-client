import React from "react";
import { MapPin } from "lucide-react";

interface Prediction {
  place_id: string;
  description: string;
}

interface PlacePredictionsProps {
  predictions: Prediction[];
  onSelect: (prediction: Prediction) => void;
}

export default function PlacePredictions({
  predictions,
  onSelect,
}: PlacePredictionsProps) {
  if (predictions.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-0 right-0 z-50 mt-[3.5rem] max-w-[400px] bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 max-h-60 overflow-y-auto">
      {predictions.map((prediction) => (
        <div
          key={prediction.place_id}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => onSelect(prediction)}
        >
          <MapPin className="h-4 w-4 flex-shrink-0 text-gray-500" />
          <span className="text-sm text-gray-700 truncate">
            {prediction.description}
          </span>
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import { MapPin } from "lucide-react";

// interface Prediction {
//   place_id: string;
//   description: string;
// }

// interface PlacePredictionsProps {
//   predictions: Prediction[];
//   onSelect: (prediction: Prediction) => void;
// }

// export default function PlacePredictions({
//   predictions,
//   onSelect,
// }: PlacePredictionsProps) {
//   if (predictions.length === 0) {
//     return null;
//   }

//   return (
//     <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
//       {predictions.map((prediction) => (
//         <div
//           key={prediction.place_id}
//           className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//           onClick={() => onSelect(prediction)}
//         >
//           <MapPin className="h-4 w-4 text-gray-500" />
//           <span className="text-sm text-gray-700">
//             {prediction.description}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
