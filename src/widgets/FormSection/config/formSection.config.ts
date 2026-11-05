import { SubmitFormType } from "@/features/submit-form/model/submitForm.types";
import registerImage from "@/widgets/FormSection/assets/register-form-img.png";
import requestImage from "@/widgets/FormSection/assets/request-form-img.png";
import { FormSectionConfig } from "../model/formSection.types";

export const formSectionConfig: Record<SubmitFormType, FormSectionConfig> = {
  request: {
    title: 'titles.leaveRequest',
    label: 'labels.leaveRequestDiscount',
    image: requestImage
  },
  'course-registration': {
    title: 'titles.courseRegistration',
    label: 'labels.eventReminder',
    image: registerImage
  }
}

