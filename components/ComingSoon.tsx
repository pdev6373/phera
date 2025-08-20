import Text from './Text';

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center h-full px-5">
      <div
        className="
        p-[20px_40px_20px_20px] rounded-[10px] 
        shadow-[0_4px_30px_0_#0000001a] 
        bg-white flex flex-col gap-[28px] 
        z-[50] md:p-6 md:gap-8 w-full max-w-[500px]
      "
      >
        <div className="flex flex-col items-center gap-4 text-center grow">
          <Text
            color="gray-700"
            size="l"
            type="h3"
            weight="medium"
            extraStyles={{
              lineHeight: 1.4,
            }}
          >
            Exciting new features are on the way <br />
            stay tuned for what’s next!
          </Text>

          <div
            className="
            px-2 py-[2px] bg-[#f4f3ff] 
            border border-[#eaecf0] 
            rounded-2xl md:px-[10px]
          "
          >
            <Text size="s" color="gray-500" type="p" weight="regular">
              Coming soon
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
