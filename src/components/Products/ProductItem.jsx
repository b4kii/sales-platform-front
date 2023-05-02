// TODO: Temp list items, refactors this later
export const ProductItem = ({name, category, price, stars}) => {
  return (
    <div className="justify-self-center w-full border-2 border-slate-900 flex flex-col items-center">
      {/* image */}
      <div className="w-full h-40 bg-green-300"></div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{stars}</div>
    </div>
  )
}
