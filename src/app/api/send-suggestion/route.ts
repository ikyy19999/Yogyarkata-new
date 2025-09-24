import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, destination, description, dayNumber } = body

    // Validate required fields
    if (!destination || !destination.trim()) {
      return NextResponse.json({ error: "Destination is required" }, { status: 400 })
    }

    // Get Telegram credentials from environment variables
    const telegramToken = process.env.TELEGRAM_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    if (!telegramToken || !telegramChatId) {
      console.error("Missing Telegram credentials")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Format message for Telegram
    const message = `
🌟 *Add New Destination for Day ${dayNumber}*

📍 *Destination:* ${destination}

👤 *Name:* ${name || "Anonim"}
📧 *Email:* ${email || "Not provided"}

📝 *Description:*
${description || "No additional description"}

⏰ *Time:* ${new Date().toLocaleString("id-ID")}
    `.trim()

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: "Markdown",
      }),
    })

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error("Telegram API error:", errorData)
      return NextResponse.json({ error: "Failed to send message to Telegram" }, { status: 500 })
    }

    return NextResponse.json({ message: "Suggestion sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing suggestion:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
