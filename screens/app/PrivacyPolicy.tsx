import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AppHeader from "../../components/layouts/AppHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamType } from "../../routes/AppStack";
import { Text } from "react-native-paper";
import Link from "../../components/common/Link";
import { useAppTheme } from "../../hooks";

type IProp = NativeStackScreenProps<AppStackParamType, "PrivacyPolicy">;
const PrivacyPolicy = ({ navigation }: IProp) => {
  const theme = useAppTheme();

  return (
    <View style={styles.wrapper}>
      <AppHeader title={"Policy"} backAction={navigation.goBack}></AppHeader>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header1}>Privacy Policy</Text>
        <Text style={styles.paragraph}>Last updated: August 20, 2023</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </Text>
        <Text style={styles.paragraph}>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <Link
            style={[styles.paragraph, { color: theme.colors.secondary }]}
            href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
          >
            Free Privacy Policy Generator
          </Link>
          .
        </Text>
        <Text style={styles.header1}>Interpretation and Definitions</Text>
        <Text style={styles.header2}>Interpretation</Text>
        <Text style={styles.paragraph}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Text>
        <Text style={styles.header2}>Definitions</Text>
        <Text style={styles.paragraph}>
          For the purposes of this Privacy Policy:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Account</Text> means a unique
              account created for You to access our Service or parts of our
              Service.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Affiliate</Text> means an entity
              that controls, is controlled by or is under common control with a
              party, where &quot;control&quot; means ownership of 50% or more of
              the shares, equity interest or other securities entitled to vote
              for election of directors or other managing authority.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Application</Text> refers to
              VocalFel, the software program provided by the Company.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Company</Text> (referred to as
              either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to VocalFel.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Country</Text> refers to: Nigeria
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Device</Text> means any device
              that can access the Service such as a computer, a cellphone or a
              digital tablet.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Personal Data</Text> is any
              information that relates to an identified or identifiable
              individual.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Service</Text> refers to the
              Application.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Service Provider</Text> means any
              natural or legal person who processes the data on behalf of the
              Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Usage Data</Text> refers to data
              collected automatically, either generated by the use of the
              Service or from the Service infrastructure itself (for example,
              the duration of a page visit).
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>You</Text> means the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.
            </Text>
          </Text>
        </View>
        <Text style={styles.header1}>
          Collecting and Using Your Personal Data
        </Text>
        <Text style={styles.header2}>Types of Data Collected</Text>
        <Text style={styles.header3}>Personal Data</Text>
        <Text style={styles.paragraph}>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Usage Data</Text>
        </View>
        <Text style={styles.header3}>Usage Data</Text>
        <Text style={styles.paragraph}>
          Usage Data is collected automatically when using the Service.
        </Text>
        <Text style={styles.paragraph}>
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </Text>
        <Text style={styles.paragraph}>
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </Text>
        <Text style={styles.paragraph}>
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </Text>
        <Text style={styles.header2}>Use of Your Personal Data</Text>
        <Text style={styles.paragraph}>
          The Company may use Personal Data for the following purposes:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>
                To provide and maintain our Service
              </Text>
              , including to monitor the usage of our Service.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>To manage Your Account:</Text> to
              manage Your registration as a user of the Service. The Personal
              Data You provide can give You access to different functionalities
              of the Service that are available to You as a registered user.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>
                For the performance of a contract:
              </Text>{" "}
              the development, compliance and undertaking of the purchase
              contract for the products, items or services You have purchased or
              of any other contract with Us through the Service.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>To contact You:</Text> To contact
              You by email, telephone calls, SMS, or other equivalent forms of
              electronic communication, such as a mobile application's push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>To provide You</Text> with news,
              special offers and general information about other goods, services
              and events which we offer that are similar to those that you have
              already purchased or enquired about unless You have opted not to
              receive such information.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>To manage Your requests:</Text> To
              attend and manage Your requests to Us.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>For business transfers:</Text> We
              may use Your information to evaluate or conduct a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all of Our assets, whether as a going
              concern or as part of bankruptcy, liquidation, or similar
              proceeding, in which Personal Data held by Us about our Service
              users is among the assets transferred.
            </Text>
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>For other purposes</Text>: We may
              use Your information for other purposes, such as data analysis,
              identifying usage trends, determining the effectiveness of our
              promotional campaigns and to evaluate and improve our Service,
              products, services, marketing and your experience.
            </Text>
          </Text>
        </View>
        <Text style={styles.paragraph}>
          We may share Your personal information in the following situations:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>With Service Providers:</Text> We
            may share Your personal information with Service Providers to
            monitor and analyze the use of our Service, to contact You.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>For business transfers:</Text> We
            may share or transfer Your personal information in connection with,
            or during negotiations of, any merger, sale of Company assets,
            financing, or acquisition of all or a portion of Our business to
            another company.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>With Affiliates:</Text> We may share
            Your information with Our affiliates, in which case we will require
            those affiliates to honor this Privacy Policy. Affiliates include
            Our parent company and any other subsidiaries, joint venture
            partners or other companies that We control or that are under common
            control with Us.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>With business partners:</Text> We
            may share Your information with Our business partners to offer You
            certain products, services or promotions.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>With other users:</Text> when You
            share personal information or otherwise interact in the public areas
            with other users, such information may be viewed by all users and
            may be publicly distributed outside.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.strongText}>With Your consent</Text>: We may
            disclose Your personal information for any other purpose with Your
            consent.
          </Text>
        </View>
        <Text style={styles.header2}>Retention of Your Personal Data</Text>
        <Text style={styles.paragraph}>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </Text>
        <Text style={styles.paragraph}>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </Text>
        <Text style={styles.header2}>Transfer of Your Personal Data</Text>
        <Text style={styles.paragraph}>
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
        </Text>
        <Text style={styles.paragraph}>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </Text>
        <Text style={styles.paragraph}>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </Text>
        <Text style={styles.header2}>Delete Your Personal Data</Text>
        <Text style={styles.paragraph}>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </Text>
        <Text style={styles.paragraph}>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </Text>
        <Text style={styles.paragraph}>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </Text>
        <Text style={styles.paragraph}>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </Text>
        <Text style={styles.header2}>Disclosure of Your Personal Data</Text>
        <Text style={styles.header3}>Business Transactions</Text>
        <Text style={styles.paragraph}>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </Text>
        <Text style={styles.header3}>Law enforcement</Text>
        <Text style={styles.paragraph}>
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </Text>
        <Text style={styles.header3}>Other legal requirements</Text>
        <Text style={styles.paragraph}>
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>Comply with a legal obligation</Text>
          <Text style={styles.listItem}>
            Protect and defend the rights or property of the Company
          </Text>
          <Text style={styles.listItem}>
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </Text>
          <Text style={styles.listItem}>
            Protect the personal safety of Users of the Service or the public
          </Text>
          <Text style={styles.listItem}>Protect against legal liability</Text>
        </View>
        <Text style={styles.header2}>Security of Your Personal Data</Text>
        <Text style={styles.paragraph}>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </Text>
        <Text style={styles.header1}>Children's Privacy</Text>
        <Text style={styles.paragraph}>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </Text>
        <Text style={styles.paragraph}>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </Text>
        <Text style={styles.header1}>Links to Other Websites</Text>
        <Text style={styles.paragraph}>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </Text>
        <Text style={styles.paragraph}>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </Text>
        <Text style={styles.header1}>Changes to this Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </Text>
        <Text style={styles.paragraph}>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </Text>
        <Text style={styles.paragraph}>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </Text>
        <Text style={styles.header1}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </Text>
        <View style={styles.list}>
          <Link
            href="mailto:devfelixphil@gmail.com"
            style={[styles.listItem, { color: theme.colors.secondary }]}
          >
            By email: devfelixphil@gmail.com
          </Link>
          <Link
            href="tel:+2349064452188"
            style={[styles.listItem, { color: theme.colors.secondary }]}
          >
            By phone number: +2349064452188
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: "2%",
    alignItems: "center",
  },
  header1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginVertical: "2%",
  },
  header2: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  header3: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  strongText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Primary-500",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    fontFamily: "Primary-400",
  },
  contactItem: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  listItem: {},
});

export default PrivacyPolicy;
