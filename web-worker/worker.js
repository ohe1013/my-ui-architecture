import commands from "./commands.js";

self.onmessage = async (msg) => {
    const { method, params, id } = msg.data;
    console.log(method, params, id);
    let data;
    if (commands.hasOwnProperty(method)) {
        try {
            const result = await commands[method](...params);
            data = { id, result };
        } catch (err) {
            data = { id, error: { code: "error", message: err.message } };
        }
    } else {
        data = {
            id,
            error: {
                code: "error",
                message: `${method}`,
            },
        };
    }
    postMessage(data);
};
