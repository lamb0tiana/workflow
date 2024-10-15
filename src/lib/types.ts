export enum FieldType {
    TEXT = "TEXT",
    CHOICES = "CHOICES",
    MULTI_CHOICE = "MULTI_CHOICE",
    MULTI_LINE = "MULTI_LINE",
    BOOLEAN = "BOOLEAN"
}

export type ConditionFieldType = {
    field: string
    label: string
    subfields?: ConditionFieldType[],
    operators: Record<"label" | "value", string>[]
    fieldType: FieldType
    values: string[] | null
}

export enum ConditionType {
    LEAD = 'LEAD',
    ACTION = 'ACTION'
}