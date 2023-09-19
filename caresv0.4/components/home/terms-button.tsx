import {Button} from '@twilio-paste/button';
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";

const EulaButton = () => {
  return(
  <Button variant="link">
    Terms
    <LinkExternalIcon decorative />
  </Button>
);
}
export default EulaButton;
