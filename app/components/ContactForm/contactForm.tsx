/** @format */

import { useRef, useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { Input, Button, Text, FormLabel, Spinner } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t } = useTranslation();
  const form: any = useRef();
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoading, setIsLoading] = useState(false); // new loading state

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true); // start loading
    setEmailStatus("idle"); // reset status on new attempt

    emailjs
      .sendForm(
        "service_j359rfl", // Service ID
        "template_416d50r", // Template ID
        form?.current,
        "_hPsUefRsIdqfy4Tt" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus("success");
          form.current.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          setEmailStatus("error");
        }
      )
      .finally(() => {
        setIsLoading(false); // stop loading
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <FormLabel>{t("Name")}</FormLabel>
        <Input type="text" name="Name" />
        <FormLabel pt={5}>{t("Email")}</FormLabel>
        <Input type="email" name="Email" />
        <Button
          type="submit"
          marginTop={5}
          colorScheme="red"
          isDisabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner size="sm" mr={2} /> {t("Sending...")}
            </>
          ) : (
            t("Submit")
          )}
        </Button>
      </form>

      {emailStatus === "success" && (
        <Text mt={4} color="green.500">
          ✅ {t("Your message has been sent successfully.")}
        </Text>
      )}
      {emailStatus === "error" && (
        <Text mt={4} color="red.500">
          ❌ {t("There was an error sending your message. Please try again.")}
        </Text>
      )}
    </div>
  );
}
