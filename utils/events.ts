import { AnimationType } from "../types";

export function setAnimationStatus(status: string, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-status-update", {
      bubbles: true,
      composed: true,
      detail: status,
    })
  );
}

export function dispatchAnimationEvent(emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animate-graph", {
      bubbles: true,
      composed: true,
    })
  );
}

export function dispatchGraphReset(emitter) {
  emitter.dispatchEvent(
    new CustomEvent("reset-graph", {
      bubbles: true,
      composed: true,
    })
  );
}

export function setAnimationPosition(position: number, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-position-update", {
      bubbles: true,
      composed: true,
      detail: position,
    })
  );
}

export function setAnimation(animation: AnimationType, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-update", {
      bubbles: true,
      composed: true,
      detail: animation,
    })
  );
}
