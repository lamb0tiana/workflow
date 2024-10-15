import {users} from "@/static_data/fields/action.ts";
import {ConditionFieldType, FieldType} from "@/lib/types.ts";

const lead_fields_candidates: ConditionFieldType[] = [
    {
        field: "affectaction",
        label: "affectaction",
        fieldType: FieldType.TEXT,
        operators: [{
            label: "égale à",
            value: "="
        },
            {
                label: "différent de",
                value: "!="
            }],
        values: users
    },
    {
        field: "duree",
        label: "duree",
        fieldType: FieldType.CHOICES,
        operators: [
            {
                label: "plus de",
                value: ">="
            },
            {
                label: "moins de",
                value: "<"
            }
        ],
        values: ["5min", "10min", "15min", "20min", "30min"]
    },
    {
        field: "source",
        label: "source",
        fieldType: FieldType.CHOICES,
        operators: [
            {
                label: "égale à",
                value: "="
            },
            {
                label: "différente de",
                value: "!="
            }
        ],
        values: ["SOURCE_VISITE_CONCESSION", "SOURCE_FORM_WEB", "SOURCE_APPEL_TEL", "SOURCE_CONTACT_MAIL", "SOURCE_CRM_CONSTRUCTEUR"]
    },
    {
        field: "contact",
        label: "contact",
        fieldType: FieldType.TEXT,
        operators: [
            {
                label: "égale à",
                value: "="
            }, {
                label: "différent de",
                value: "!="
            },
            {
                label: "contient",
                value: "%s%"
            }
        ],
        values: null
    }

]


export {lead_fields_candidates}