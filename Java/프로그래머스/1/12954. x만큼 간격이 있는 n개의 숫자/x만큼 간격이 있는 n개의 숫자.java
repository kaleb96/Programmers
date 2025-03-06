class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        long value = x;
        for(int i=0; i<answer.length; i++) {
            answer[i] = value;
            value += x;
        }
        
        return answer;
    }
}