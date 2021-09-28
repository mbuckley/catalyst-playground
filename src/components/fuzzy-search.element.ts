import { controller, target } from '@github/catalyst';
import { debounce } from '@github/mini-throttle/decorators';

@controller
class FuzzySearchElement extends HTMLElement {
  @target name: HTMLElement;
  @target output: HTMLElement;

  // @debounce(500)
  search() {
    this.output.textContent = this.name.value;
  }
}
