'use client';

import { useMemo, useState } from "react";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "@/app/data/categoriesList";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import Counter from "../inputs/Counter";
import dynamic from "next/dynamic";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading , setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: "",
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc : "",
      price: 1,
      title:"",
      description: "",
    },
  })

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const ImgSrc = watch("imageSrc");

  const router = useRouter();

  const Map = useMemo(() => dynamic(() => import("../Map"),{
    ssr:false
  }), [location]);
  

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value,{
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
        }
    )
  }
  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step!==STEPS.PRICE) {
      onNext();
      return;
    }
    setIsLoading(true);

    axios.post("/api/listings", data)
    .then(() => {
      toast.success("Listing created successfully");
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY);
      rentModal.onClose();
    })
    .catch((error) => {
      toast.error("Something went wrong. Please try again.");
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Submit";
    }
    return "Next";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput 
                onClick={(category) => setCustomValue("category", category)}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Where's your place?" subtitle="Help guests find you!" />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location",value)}
        />
        <Map
          center={location?.latlng}
        />
      </div>
    )}

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className=" flex flex-col gap-8">
          <Heading
            title="Shaare some basics about your place."
            subtitle="What amenities do you offer?"
            />
            <Counter
              title="Guests"
              subtitle="How many guests can your place accommodate?"
              value = {guestCount}
              onChange= {(value)=> setCustomValue("guestCount", value)}   
            />
            <Counter
              title="Rooms"
              subtitle="How many rooms can guests use?"
              value = {roomCount}
              onChange= {(value)=> setCustomValue("roomCount", value)}   
            />
            <Counter
              title="Bathrooms"
              subtitle="How many bathrooms can guests use?"
              value = {bathroomCount}
              onChange= {(value)=> setCustomValue("bathroomCount", value)}   
            />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle = 'Show guests what your place looks like!'
        />
        <ImageUpload
          value = {ImgSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
          />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Describe your place"
          subtitle="Tell guests about your place!"
        />
        <Input
          label = "Title"
          id="title"
          disabled = {isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr/>
        <Input
          label = "Description"
          id="description"
          disabled = {isLoading}
          register={register}
          errors={errors}
          required
          />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Set your price"
          subtitle="How much do you want to charge?"
        />
        <Input
          label = "Price"
          id="price"
          disabled = {isLoading}
          register={register}
          errors={errors}
          required
          type="number"
          formatPrice
          />
      </div>
    );
  }


  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={step === STEPS.CATEGORY ? undefined : "Back"}
      body={bodyContent}
    />
  );
};

export default RentModal;
