public class Conversor {
  public static void main(String[] args) {
    if (args.length > 0) {
      long entrada = Long.parseLong(args[0]);
      byte[] saida = LongToByteArray(entrada);

      for (int i = 0; i < 8; i++) {
        System.out.println(saida[i]);
      }
    }
  }

  public static byte[] LongToByteArray(long num) {
    byte[] saida = new byte[8];

    for (int i = 0; i < 8; i++) {
      saida[7 - i] = (byte) (Math.floor((num / (Math.pow(256, i)))) % 256);
    }

    return saida;
  }
}
