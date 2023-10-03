export interface ITextInput {
    value: string, 
    validity: { isInvalid: boolean, message: string }
}

export const getITextInputDefault = (): ITextInput => ({
    value: "", 
    validity: { isInvalid: false, message: "" }
})