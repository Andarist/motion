import * as React from "react"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "@framer"

const style = {
    width: 100,
    height: 100,
    background: "red",
}

export const App = () => {
    return <motion.div animate={{ width: "100%" }} style={style} />
}
