import { motion } from "framer-motion";
import { Check, CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    clearCart();

    // Redirect to home after showing success message
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto mt-20 p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <Check className="w-10 h-10 text-green-600" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
        <p className="text-gray-600 mb-8">
          Your order has been confirmed and will be shipped soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            <div className="flex items-center mb-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= i ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    {i}
                  </div>
                  {i === 1 && (
                    <div className="w-24 h-1 mx-2 bg-gray-200">
                      <div
                        className={`h-full ${
                          step > 1 ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Shipping Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="border p-2 rounded"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="border p-2 rounded"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="border p-2 rounded"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      required
                      className="border p-2 rounded"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      className="border p-2 rounded"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      required
                      className="border p-2 rounded"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Payment Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border rounded">
                      <CreditCard className="w-6 h-6" />
                      <span>Credit Card</span>
                    </div>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      required
                      className="border p-2 rounded w-full"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        required
                        className="border p-2 rounded"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        required
                        className="border p-2 rounded"
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>

        <div className="lg:w-96">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <p className="font-medium">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getTotal()?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${getTotal()?.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center gap-3">
              <Truck className="w-6 h-6 text-gray-400" />
              <p className="text-sm text-gray-600">
                Free shipping on all orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
