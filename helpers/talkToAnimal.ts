import axios from "axios"

const talkToAnimal = async (animal: string, message: string) => {
    try {
      const result: any = await axios.get(
        `https://ecoworld-backend.vercel.app/talkToAnimal?animal=${animal}&message=${message}`,
      )
      return result.data
    } catch (error) {
        console.error('Error fetching AI response:', error)
        return error
  }
}

export default talkToAnimal