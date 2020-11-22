import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
     debugger
        const state = restoreState("editable-span-value", value)
        setValue(state)
    };

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.borromhw6}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : <span onFocus={(e)=>alert('hi')} placeholder='asa'>"Enter your text..."</span>}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    );
}

export default HW6;
