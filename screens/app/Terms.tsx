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

type IProp = NativeStackScreenProps<AppStackParamType, "Terms">;
const Terms = ({ navigation }: IProp) => {
  const theme = useAppTheme();

  return (
    <View style={styles.wrapper}>
      <AppHeader title={"Terms"} backAction={navigation.goBack}></AppHeader>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header1}>Terms and Conditions</Text>
        <Text style={styles.paragraph}>Last updated: August 20, 2023</Text>
        <Text style={styles.paragraph}>
          Please read these terms and conditions carefully before using Our
          Service.
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
        <Text style={styles.paragraph}>For the purposes of these Terms and Conditions:</Text>
        <View style={styles.list}>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Application</Text> means the software program provided
              by the Company downloaded by You on any electronic device, named
              VocalFel
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Application Store</Text> means the digital distribution
              service operated and developed by Apple Inc. (Apple App Store) or
              Google Inc. (Google Play Store) in which the Application has been
              downloaded.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Affiliate</Text> means an entity that controls, is
              controlled by or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Country</Text> refers to: Nigeria
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Company</Text> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement) refers to VocalFel.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Device</Text> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Service</Text> refers to the Application.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Terms and Conditions</Text> (also referred as
              &quot;Terms&quot;) mean these Terms and Conditions that form the
              entire agreement between You and the Company regarding the use of
              the Service. This Terms and Conditions agreement has been created
              with the help of the{" "}
              <Link
                style={[styles.paragraph, {color: theme.colors.secondary}]}
                href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
              >
                Free Terms and Conditions Generator
              </Link>
              .
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>Third-party Social Media Service</Text> means any
              services or content (including data, information, products or
              services) provided by a third-party that may be displayed,
              included or made available by the Service.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.strongText}>You</Text> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </Text>
        </View>
        <Text style={styles.header1}>Acknowledgment</Text>
        <Text style={styles.paragraph}>
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </Text>
        <Text style={styles.paragraph}>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </Text>
        <Text style={styles.paragraph}>
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </Text>
        <Text style={styles.paragraph}>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </Text>
        <Text style={styles.paragraph}>
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </Text>
        <Text style={styles.header1}>Links to Other Websites</Text>
        <Text style={styles.paragraph}>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </Text>
        <Text style={styles.paragraph}>
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that the Company
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </Text>
        <Text style={styles.paragraph}>
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party web sites or services that You visit.
        </Text>
        <Text style={styles.header1}>Termination</Text>
        <Text style={styles.paragraph}>
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions.
        </Text>
        <Text style={styles.paragraph}>
          Upon termination, Your right to use the Service will cease
          immediately.
        </Text>
        <Text style={styles.header1}>Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.
        </Text>
        <Text style={styles.paragraph}>
          To the maximum extent permitted by applicable law, in no event shall
          the Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.
        </Text>
        <Text style={styles.paragraph}>
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party's liability will be limited to the greatest extent
          permitted by law.
        </Text>
        <Text style={styles.header1}>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</Text>
        <Text style={styles.paragraph}>
          The Service is provided to You &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; and with all faults and defects without warranty of
          any kind. To the maximum extent permitted under applicable law, the
          Company, on its own behalf and on behalf of its Affiliates and its and
          their respective licensors and service providers, expressly disclaims
          all warranties, whether express, implied, statutory or otherwise, with
          respect to the Service, including all implied warranties of
          merchantability, fitness for a particular purpose, title and
          non-infringement, and warranties that may arise out of course of
          dealing, course of performance, usage or trade practice. Without
          limitation to the foregoing, the Company provides no warranty or
          undertaking, and makes no representation of any kind that the Service
          will meet Your requirements, achieve any intended results, be
          compatible or work with any other software, applications, systems or
          services, operate without interruption, meet any performance or
          reliability standards or be error free or that any errors or defects
          can or will be corrected.
        </Text>
        <Text style={styles.paragraph}>
          Without limiting the foregoing, neither the Company nor any of the
          company's provider makes any representation or warranty of any kind,
          express or implied: (i) as to the operation or availability of the
          Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </Text>
        <Text style={styles.paragraph}>
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
        </Text>
        <Text style={styles.header1}>Governing Law</Text>
        <Text style={styles.paragraph}>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </Text>
        <Text style={styles.header1}>Disputes Resolution</Text>
        <Text style={styles.paragraph}>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </Text>
        <Text style={styles.header1}>For European Union (EU) Users</Text>
        <Text style={styles.paragraph}>
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which you are
          resident in.
        </Text>
        <Text style={styles.header1}>United States Legal Compliance</Text>
        <Text style={styles.paragraph}>
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo, or that has
          been designated by the United States government as a &quot;terrorist
          supporting&quot; country, and (ii) You are not listed on any United
          States government list of prohibited or restricted parties.
        </Text>
        <Text style={styles.header1}>Severability and Waiver</Text>
        <Text style={styles.header2}>Severability</Text>
        <Text style={styles.paragraph}>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </Text>
        <Text style={styles.header2}>Waiver</Text>
        <Text style={styles.paragraph}>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under these Terms shall not
          effect a party's ability to exercise such right or require such
          performance at any time thereafter nor shall the waiver of a breach
          constitute a waiver of any subsequent breach.
        </Text>
        <Text style={styles.header1}>Translation Interpretation</Text>
        <Text style={styles.paragraph}>
          These Terms and Conditions may have been translated if We have made
          them available to You on our Service. You agree that the original
          English text shall prevail in the case of a dispute.
        </Text>
        <Text style={styles.header1}>Changes to These Terms and Conditions</Text>
        <Text style={styles.paragraph}>
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material We will make
          reasonable efforts to provide at least 30 days' notice prior to any
          new terms taking effect. What constitutes a material change will be
          determined at Our sole discretion.
        </Text>
        <Text style={styles.paragraph}>
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service.
        </Text>
        <Text style={styles.header1}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about these Terms and Conditions, You can
          contact us:
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

export default Terms;
