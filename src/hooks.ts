import type { Handle } from "@sveltejs/kit";

export const hande: Handle = async({ resolve, event}) => {
    return resolve(event)
}

