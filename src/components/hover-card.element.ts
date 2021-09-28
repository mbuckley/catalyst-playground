import { controller, target } from '@github/catalyst';

@controller
class HoverCardElement extends HTMLElement {
  public disabled: boolean;

  enable() {
    this.disabled = false;
  }
}
