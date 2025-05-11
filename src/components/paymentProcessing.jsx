export default function PaymentProcessing(props) {
  return (
    <div className="rounded-lg bg-green-200 flex justify-center items-center h-2/5 w-11/12 lg:w-1/3">
      {props.paymentStatus == "processing" && <h1>Processing...</h1>}
      {props.paymentStatus == "complete" && <h1>Done.</h1>}
    </div>
  );
}
