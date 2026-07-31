export const YANDEX_METRIKA_ID = 111184916

/** Идентификатор JS-цели в Яндекс Метрике: успешная отправка заявки */
export const YANDEX_METRIKA_LEAD_GOAL = 'lead'

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void
  }
}

/** Цель только после успешного ответа сервера (HTTP 200 + ok). */
export function trackLeadSubmitSuccess() {
  window.ym?.(YANDEX_METRIKA_ID, 'reachGoal', YANDEX_METRIKA_LEAD_GOAL)
}
