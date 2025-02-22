import React from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";

interface FormValues {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
}

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ReferModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Reset form after submission
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/refer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Referral submitted successfully! 🎉");
        reset(); // Clear form fields
        closeModal(); // Close modal
      } else {
        alert(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Failed to submit referral. Please try again.");
    }
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full transform transition-all">
            <Dialog.Title className="text-xl font-bold text-gray-900 text-center">
              Refer a Friend
            </Dialog.Title>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              {/* Referrer Name */}
              <div className="mb-3">
                <label className="block text-gray-700 font-medium">Your Name</label>
                <input
                  {...register("referrerName", { required: "Referrer name is required" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.referrerName ? "border-red-500" : "border-gray-300"
                  }`}
                  type="text"
                  placeholder="John Doe"
                />
                {errors.referrerName && <p className="text-red-500 text-sm">{errors.referrerName.message}</p>}
              </div>

              {/* Referrer Email */}
              <div className="mb-3">
                <label className="block text-gray-700 font-medium">Your Email</label>
                <input
                  {...register("referrerEmail", {
                    required: "Referrer email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.referrerEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  type="email"
                  placeholder="you@example.com"
                />
                {errors.referrerEmail && <p className="text-red-500 text-sm">{errors.referrerEmail.message}</p>}
              </div>

              {/* Referee Name */}
              <div className="mb-3">
                <label className="block text-gray-700 font-medium">Friend's Name</label>
                <input
                  {...register("refereeName", { required: "Referee name is required" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.refereeName ? "border-red-500" : "border-gray-300"
                  }`}
                  type="text"
                  placeholder="Friend's Name"
                />
                {errors.refereeName && <p className="text-red-500 text-sm">{errors.refereeName.message}</p>}
              </div>

              {/* Referee Email */}
              <div className="mb-3">
                <label className="block text-gray-700 font-medium">Friend's Email</label>
                <input
                  {...register("refereeEmail", {
                    required: "Referee email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.refereeEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  type="email"
                  placeholder="friend@example.com"
                />
                {errors.refereeEmail && <p className="text-red-500 text-sm">{errors.refereeEmail.message}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReferModal;
