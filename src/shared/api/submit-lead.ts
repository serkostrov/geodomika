export interface SubmitLeadPayload {
  source: string
  name?: string
  phone: string
  message?: string
  policyAccepted: boolean
}

export async function submitLead(payload: SubmitLeadPayload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data: { ok?: boolean; error?: string } | null = null
  try {
    data = (await response.json()) as { ok?: boolean; error?: string }
  } catch {
    data = null
  }

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || 'Не удалось отправить заявку')
  }
}
