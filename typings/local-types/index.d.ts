declare module 'local-types' {
  export interface IAnswer {
    id: number
    description: string
    question_id: number
    created_at: string
    updated_at: string
  }
  
  export type AnswerContextType = {
    value: IAnswer[] | null
    setAnswers: (a: IAnswer[]) => void
  }
}