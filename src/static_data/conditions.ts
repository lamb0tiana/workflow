import {ButtonConditionItemActionRow, createRow} from "@/lib/tools/conditions.ts";

export type ConditionType = {
    field: string
    operators: Record<"label" | "value", string>[]
    values: string[] | null
}

const conditions_candidates: ConditionType[] = [{
    field: "affectaction",
    operators: [{
        label: "égale à",
        value: "="
    },
        {
            label: "différent de",
            value: "!="
        }],
    values: ["", "a.ando@hotmail.fr@deleted.com", "admin-riester@estorik.com", "adrien.jouen@grouperiester.fr", "adrien.samay@grouperiester.fr", "adrien.serraille@grouperiester.fr", "alban.simao@grouperiester.fr", "alex.germain@grouperiester.fr", "alex@estorik.com", "alexandra.dubois@riester.fr", "ALEXANDRE.TAISNE@GROUPERIESTER.FR@deleted.com", "alexandre.walther@grouperiester.fr", "alexis.cintract@grouperiester.fr", "alexis.telliez@grouperiester.fr", "amandine.brazier@grouperiester.fr@deleted.com", "amaury.guy@grouperiester.fr", "anais.lamat@grouperiester.fr", "ando.andrianasy@grouperiester.fr", "andre.desousa@grouperiester.fr", "angela.derekeneire@grouperiester.fr", "angelique.bedel@grouperiester.fr@deleted.com9", "anthony.fernandes@grouperiester.fr", "ANTHONY.FERNANDES@grouperiester.fr@deleted.co", "anthony.moreau@grouperiester.fr", "antonio.fernandes@grouperiester.fr@deleted.co", "antonio.valente@grouperiester.fr", "antonio.valente@riester.fr@deleted.com", "apv.beauvais@proteasas.fr@deleted.com64324199", "apv.bussy@grouperiester.fr", "apv.saintmaximin@grouperiester.fr", "aurelie.dethiere@grouperiester.fr", "aurelie.mercier@grouperiester.fr", "aurelien.sottiaux@grouperiester.fr", "aurelien.thevenin@grouperiester.fr", "AURELIEN.THEVENIN@riester.fr@deleted.com", "baptiste.barathieu@grouperiester.fr@deleted.c", "baptiste.sage@grouperiester.fr", "bastien.arnaud@grouperiester.fr", "benjamin.selves@grouperiester.fr", "bruno.angot@grouperiester.fr", "camille.bender@grouperiester.fr", "cedric.oudin@grouperiester.fr", "cedric.regeau@grouperiester.fr", "celine.letallec@grouperiester.fr", "celine.pignon@grouperiester.fr@deleted.com", "celine.vannier@grouperiester.fr", "charfeddine.bougdima@grouperiester.fr", "christelle.etienne@grouperiester.fr", "christine.catoire@grouperiester.fr", "CHRISTOPHE.BERNARD@grouperiester.fr@deleted.c", "christophe.bernard@proteasas.fr@deleted.com"]
},
    {
        field: "duree",
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

const get_conditions_template = () : string => `
<div class="container flex flex-col gap-2">
    <div class="rows">
        <div class="flex gap-3">    
            ${createRow(ButtonConditionItemActionRow.ADD_CONDITION_ITEM)} 
        </div>
    </div>

</div>

`
export {get_conditions_template, conditions_candidates}