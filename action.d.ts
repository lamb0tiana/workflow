declare global {
    interface Window{
        handleSelection: (e:Event) => void
        handleFieldChange: (e:Event) => void
        remove_condition_item_row: (e:MouseEvent) => void
        add_condition_row: (e:Event) => void
        handleStatusChange: (e:Event) => void
        handleActionChange: (e:Event) => void
        extractFormData:(form: HTMLFormElement) => Record<string, Record<string, string>>
    }
}

export {}
