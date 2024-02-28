interface errorType { 
  error: string
}
export const ShowError: React.FC<errorType> = ({error}) => {
  return <p className="text-redDefault">{error}</p>
}
