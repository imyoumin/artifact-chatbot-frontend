import API_BASE_URL from "./config";

// 환경변수 값 확인용 로그 (배포 후 브라우저 콘솔에서 확인 가능)
console.log("🔗 API BASE URL is:", API_BASE_URL);

export async function sendChatMessage({ userId, message, artifactId }) {
  const res = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, message, artifactId }),
  });

  if (!res.ok) {
    throw new Error(`Chat API 요청 실패 (status: ${res.status})`);
  }

  return res.json();
}
