export function Emoji() {
    return (target: object, key: string) => {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = (value: string) => {
            val = ` 😂  ${value}  😂`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

export function Confirmable(msg: string) {
    return (target: object, key: string, des: PropertyDescriptor) => {
        const originalMethod = des.value;
        // 更改函数的value
        des.value = function (...args: any) {
            const allow = window.confirm(msg);
            if (allow) {
                const result = originalMethod.apply(this, args);
                return result;
            } else {
                return des
            }
        }
    }
}