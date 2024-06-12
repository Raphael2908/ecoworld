import axios from "axios"

const getAnimalSpeech = async (animal: string) => {
    try {
      const result: any = await axios.get(
        `https://ecoworld-backend.vercel.app/getAnimalSpeech?animal=${animal}`,
      )
      return result.data
    } catch (error) {
        console.error('Error fetching AI response:', error)
        return error
  }
}

export default getAnimalSpeech